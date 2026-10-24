"use client";

import type { InfoType } from "@/app/types";
import arrowIcon from "@/public/arrow.svg";
import arrowEndIcon from "@/public/arrowEnd.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Pagination.module.css";

interface PaginationProps {
  fetchInfo: InfoType;
  params: Record<string, string>;
}

const Pagination = ({ fetchInfo, params }: PaginationProps) => {
  const router = useRouter();
  const pathName = usePathname();

  const handlePagination = (newPage: number) => {
    const searchParams = new URLSearchParams(params);
    searchParams.set("page", String(newPage));

    if (searchParams.get("page") === "0") searchParams.delete("page");

    router.push(`${pathName}?${String(searchParams)}`);
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.paginationLeft}>
        {params.page && (
          <>
            <button
              type="button"
              onClick={() => handlePagination(0)}
              className={styles.paginationBtn}
            >
              <Image
                src={arrowEndIcon}
                alt="first page"
                width={20}
                className={styles.arrowLeft}
              />
            </button>

            <button
              type="button"
              onClick={() => handlePagination(+params.page - 1)}
              className={styles.paginationBtn}
            >
              <Image
                src={arrowIcon}
                alt="previous page"
                width={20}
                className={styles.arrowLeft}
              />
            </button>
          </>
        )}
      </div>

      <span className={styles.paginationNumber}>
        Page <strong>{+params.page + 1 || 1} </strong>
        of <strong>{fetchInfo.pages}</strong>
      </span>

      <div className={styles.paginationRight}>
        {((!params.page && fetchInfo.pages > 1) ||
          +params.page + 1 < fetchInfo.pages) && (
          <>
            <button
              type="button"
              onClick={() => handlePagination(+params.page + 1 || 1)}
              className={styles.paginationBtn}
            >
              <Image
                src={arrowIcon}
                alt="next page"
                width={20}
                className={styles.arrowRight}
              />
            </button>

            <button
              type="button"
              onClick={() => handlePagination(fetchInfo.pages - 1)}
              className={styles.paginationBtn}
            >
              <Image
                src={arrowEndIcon}
                alt="last page"
                width={20}
                className={styles.arrowRight}
              />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Pagination;
