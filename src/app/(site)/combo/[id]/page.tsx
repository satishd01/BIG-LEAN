"use client";
import { Products } from "@/components/shop-by-brands/ShopByBrands";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";
import { useGetComboProducts } from "@/queries/dataHandlers";
import { useParams } from "next/navigation";

type Props = {};

export default function page({}: Props) {
  const params = useParams();
  const id  = params?.id as string
  const { data } = useGetComboProducts(Number(id));
  return (
    <CustomPageWrapper className="flex flex-col items-center gap-10">
      <Products products={data?.combo} />
    </CustomPageWrapper>
  );
}
