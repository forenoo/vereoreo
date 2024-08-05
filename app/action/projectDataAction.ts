"use server";

import { prisma } from "@/lib/prisma";
import { Project } from "@/common/types/project";
import { revalidatePath } from "next/cache";

export const addProject = async (data: Project) => {
  const { title, image, category } = data;

  await prisma.project.create({
    data: {
      title: title,
      image: image,
      category: category,
    },
  });

  revalidatePath("/");
};

export const getProjects = async () => {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });

  return projects;
};

export const getCategoryProjects = async (category: Project["category"]) => {
  const projects = await prisma.project.findMany({
    where: {
      category: category,
    },
  });

  return projects;
};

export const deleteProject = async (id: string) => {
  await prisma.project.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/");
};
