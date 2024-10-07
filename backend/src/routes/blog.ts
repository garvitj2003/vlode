import { Hono } from "hono";
import { Prisma, PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: any;
    prisma: any;
  };
}>();

// A hack to make prisma client available globally.
blogRouter.use("/*", async (c, next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  c.set("prisma", prisma);
  await next();
});

// Authorization middleware checks if the user is signin/signup or not
blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("authorization") || "";
  const user = await verify(header, c.env.JWT_SECRET);
  if (user) {
    c.set("userId", user.id);
    await next();
    return c.json({ msg: "sucessfull" });
  } else {
    c.status(403);
    return c.json({ message: "you are not logged in" });
  }
});

// Route to post blog
blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const userId = c.get("userId");
  const prisma = c.get("prisma");
  try {
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        // sorry there is a typo
        authourId: userId,
      },
    });
  } catch (e) {
    console.log(e);
    c.status(411);
    return c.json({ message: "couldnt upload blog" });
  }
});

// Route to edit blog
blogRouter.put("/", async (c) => {
  const prisma = c.get("prisma");
  const body = await c.req.json();

  const blog = await prisma.post.update({
    data: {
      title: body.title,
      content: body.content,
    },
    where: {
      id: body.id,
    },
  });
});

// Route to get a blog by id
blogRouter.get("key/:id", async (c) => {
  const prisma = c.get("prisma");
  const id = c.req.param("id");

  const blog = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
  });
  return c.json({ blog });
});

// Route to get blogs in feed, but still need to add a pagination algo

blogRouter.get("/bulk", async (c) => {
  const prisma = c.get("prisma");

  const blog = await prisma.post.findMany();
  return c.json({ blog });
});
