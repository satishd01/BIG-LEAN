"use client";
import { Products } from "@/components/shop-by-brands/ShopByBrands";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";
import { useGetOfferProducts } from "@/queries/dataHandlers";
import { useParams } from "next/navigation";

type Props = {};

export default function page({}: Props) {
  const params = useParams();
  const id = params?.id as string; // Ensure `id` is a string
  const offerId = id ? Number(id) : null; // Convert safely to a number

  const { data } = useGetOfferProducts(offerId ?? 0); 
  return (
    <CustomPageWrapper className="flex flex-col items-center gap-10">
      <img
        src={data?.offer?.image}
        alt="offer"
        className="max-w-full w-fit h-[250px] object-cover"
      />
      <Products isOffer={true} products={data?.offer?.products} />
    </CustomPageWrapper>
  );
}
