import React, { useEffect, useState } from "react";
import { BlogModel } from "../../data/blogData";
import { useRouter } from "next/router";
import Card from "./Card";
import IconBox, { IconType } from "../../common/IconBox/IconBox";
import { userStores } from "../../store/Context";
import BlogService from "../../service/blogService";

type CardProps = {
  // children: React.ReactNode;
  blogData: BlogModel;
};

export default function BlogCard({ blogData }: CardProps) {
  const { userStore } = userStores();

  const [isAdmin, setIsAdmin] = useState(false);
  const date = new Date(blogData.createdAt).toLocaleDateString().split(",");
  const router = useRouter();
  const onClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation();
    router.push(
      {
        pathname: `blogs/${blogData.id}`,
      },
      `blogs/${blogData.id}`
    );
  };

  const onRemove = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();

    BlogService.deleteBlog(blogData.id);
  };

  useEffect(() => {
    userStore.isAdmin ? setIsAdmin(true) : setIsAdmin(false);
  }, [userStore.isAdmin]);

  return (
    <Card
      onClick={(e) => {
        onClick(e);
      }}
    >
      <h5 className="py-3">{blogData.title}</h5>

      {/* {children} */}

      {/* <p>{Date.parse(blogData.createdAt)}</p> */}
      <section className="flex items-center justify-between">
        <p className="flex flex-row-revers">{date[0]}</p>

        {isAdmin && (
          <div className="flex">
            <IconBox iconName={IconType.update} />
            <IconBox iconName={IconType.trash} onClick={onRemove} />
          </div>
        )}
      </section>
    </Card>
  );
}
