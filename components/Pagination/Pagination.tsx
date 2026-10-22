"use client";

import { usePathname, useRouter } from "next/navigation";
import type { InfoType } from "@/app/types";
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
    router.push(`${pathName}?${String(searchParams)}`);
  };

  return (
    <div className={styles.pagination}>
      <button
        type="button"
        onClick={() => handlePagination(0)}
        className={styles.paginationBtn}
      >
        First page
      </button>
      <button
        type="button"
        onClick={() => handlePagination(+params.page - 1)}
        className={styles.paginationBtn}
      >
        Previous page
      </button>

      <span className={styles.paginationNumber}>
        Page {+params.page + 1 || 1} of {fetchInfo.pages}
      </span>

      <button
        type="button"
        onClick={() => handlePagination(+params.page + 1 || 2)}
        className={styles.paginationBtn}
      >
        Next page
      </button>
      <button
        type="button"
        onClick={() => handlePagination(fetchInfo.pages - 1)}
        className={styles.paginationBtn}
      >
        Last page
      </button>
    </div>
  );
};

export default Pagination;
