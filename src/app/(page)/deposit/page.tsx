"use client";
import Layout1 from "@/app/layout/Layout1";
import React from "react";
import { useState } from "react";
import Button from "@/app/components/Button";
export default function page() {
  const [selectedBank, setSelectedBank] = useState<string | null>("MoMo");

  const handleSelectBank = (bankName: string) => {
    setSelectedBank(bankName);
  };
  const getClassName = (bankName: string) => {
    // Nếu ngân hàng đang được chọn, thêm class "selected"
    return selectedBank === bankName
      ? "border-[#ed4d2d] bg-[#3a1600] border-2 rounded-md"
      : "border-transparent bg-[#333333] border-2 rounded-md";
  };

  return (
    <Layout1>
      <div className="min-h-screen pt-[150px] flex items-center flex-col">
        <span className="text-[40px] font-bold">POPS Stars dùng làm gì</span>
        <ul className="mt-[40px] flex space-x-[50px]">
          <li className="flex items-center space-x-[20px] max-w-[440px]">
            <div className="w-[180px]">
              <img
                src="https://cdn.popsww.com/popsapp/assets/images/icons/payment_unlock_chap.png"
                alt=""
              />
            </div>
            <ul className="h-[100%] space-y-2">
              <li className="text-[32px] font-bold">Mở khóa truyện</li>
              <li className="text-[16px] text-[#c4d6e2] font-medium">
                Đọc ngay những chapter mới nhất của các bộ Comics hàng đầu tại
                POPS
              </li>
            </ul>
          </li>
          <li className="flex items-center space-x-[20px] max-w-[440px]">
            <div className="w-[180px]">
              <img
                src="https://cdn.popsww.com/popsapp/assets/images/icons/payment_donate.png"
                alt=""
              />
            </div>
            <ul className="h-[100%] space-y-2">
              <li className="text-[32px] font-bold">Donate một gói quà</li>
              <li className="text-[16px] text-[#c4d6e2] font-medium">
                Góp sức mang về thêm nhiều nội dung bản quyền, nâng cấp nền tảng
              </li>
            </ul>
          </li>
        </ul>
        <ul className="mt-[40px] flex space-x-[50px]">
          <li className="flex items-center space-x-[20px] max-w-[440px]">
            <div className="w-[180px]">
              <img
                src="https://cdn.popsww.com/popsapp/assets/images/icons/payment_sticker.png"
                alt=""
              />
            </div>
            <ul className="h-[100%] space-y-2">
              <li className="text-[32px] font-bold">Mua Sticker</li>
              <li className="text-[16px] text-[#c4d6e2] font-medium">
                Bình luận “cực chiến” cùng các sticker siêu cưng, xịn xò tại nội
                dung yêu thích
              </li>
            </ul>
          </li>
          <li className="flex items-center space-x-[20px] max-w-[440px]">
            <div className="w-[180px]">
              <img
                src="https://cdn.popsww.com/popsapp/assets/images/icons/payment_and_more.png"
                alt=""
              />
            </div>
            <ul className="h-[100%] space-y-2">
              <li className="text-[32px] font-bold">Và hơn thế nữa....</li>
              <li className="text-[16px] text-[#c4d6e2] font-medium">
                Nhưng tiện ích bổ sung vẫn đang được phát triển nhanh chóng
              </li>
            </ul>
          </li>
        </ul>
        <div className="w-[1000px] px-[80px] py-[49px] my-20 rounded-md bg-[#242424]">
          {/* title */}
          <span className="flex justify-between items-center pb-[30px] border-b-[1px]">
            <span className="text-[36px] font-bold">Nạp POPS STARS:</span>
            <span className="text-[36px] font-bold flex items-center space-x-2">
              <div className="w-[30px]">
                <img
                  src="https://cdn.popsww.com/popsapp/static/images/topup/ic-coin.svg?format=webp"
                  alt=""
                />
              </div>
              <span className="text-[#ed4d2d]">0</span>
            </span>
          </span>
          {/* phương thức thanh toán */}
          <nav className="mt-10 space-y-[45px]">
            <ul className="space-y-[20px]">
              <li className="flex items-center space-x-5">
                <div className="bg-white text-[#131313] rounded-full flex justify-center items-center w-[35px] h-[35px] font-bold text-[20px] border">
                  1
                </div>
                <span className="text-[24px] font-bold">Lựa Chọn Gói</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[20px]">
                  1a. Chọn Ngay Một Trong Các Gói Gói Truyện Hoàng Tử Bari
                </span>
                <span className="text-[16px] text-[#c4d6e2]">
                  Nạp số stars tương ứng và sở hữu ngay một trong các gói:
                </span>
              </li>
              <li>
                <div className="h-[115px] w-[260px] rounded-md border-2 border-[#ed4d2d] bg-[#3a1600] flex justify-center items-center">
                  <ul>
                    <li className="flex items-center space-x-1">
                      <div className="w-[30px]">
                        <img
                          src="https://cdn.popsww.com/popsapp/static/images/topup/ic-coin.svg?format=webp"
                          alt=""
                        />
                      </div>
                      <span className="text-[34px] font-bold">255</span>
                    </li>
                    <li className="text-center text-[24px] text-[#ed4d2d] font-bold">
                      đ25.500
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            {/* hình thức thanh toán */}
            <ul className="space-y-[20px]">
              <li className="flex items-center space-x-5">
                <div className="bg-white text-[#131313] rounded-full flex justify-center items-center w-[35px] h-[35px] font-bold text-[20px] border">
                  2
                </div>
                <span className="text-[24px] font-bold">
                  Chọn Hình Thức Thanh Toán
                </span>
              </li>
              <ul className="flex justify-between w-full items-center">
                <li
                  className={`flex justify-center items-center cursor-pointer ${getClassName(
                    "MoMo"
                  )}`}
                  onClick={() => handleSelectBank("MoMo")}
                >
                  <div className="w-[195px] h-[135px] rounded-md flex flex-col justify-center items-center space-y-2">
                    <div className="size-[90px] rounded-md overflow-hidden">
                      <img
                        src="https://cdn.popsww.com/popsapp/static/momo.png?format=webp"
                        alt=""
                      />
                    </div>
                    <span className="text-[14px] text-[#c6c6c6]">
                      MoMo E-Wallet
                    </span>
                  </div>
                </li>
                <li
                  className={`flex justify-center items-center cursor-pointer ${getClassName(
                    "ZaloPay"
                  )}`}
                  onClick={() => handleSelectBank("ZaloPay")}
                >
                  <div className="w-[195px] h-[135px] rounded-md flex flex-col justify-center items-center space-y-2">
                    <div className="size-[90px] rounded-md overflow-hidden">
                      <img
                        src="https://cdn.popsww.com/popsapp/static/zalo.png?format=webp"
                        alt=""
                      />
                    </div>
                    <span className="text-[14px] text-[#c6c6c6]">
                      ZaloPay E-Wallet
                    </span>
                  </div>
                </li>
                <li
                  className={`flex justify-center items-center cursor-pointer ${getClassName(
                    "ShopeePay"
                  )}`}
                  onClick={() => handleSelectBank("ShopeePay")}
                >
                  <div className="w-[195px] h-[135px] rounded-md flex flex-col justify-center items-center space-y-2">
                    <div className="size-[90px] rounded-md overflow-hidden">
                      <img
                        src="https://cdn.popsww.com/popsapp/assets/images/payment/shopee-pay-v1.png?format=webp"
                        alt=""
                      />
                    </div>
                    <span className="text-[14px] text-[#c6c6c6]">
                      ShopeePay E-Wallet
                    </span>
                  </div>
                </li>
                <li
                  className={`flex justify-center items-center cursor-pointer ${getClassName(
                    "ATM/Visa/QR"
                  )}`}
                  onClick={() => handleSelectBank("ATM/Visa/QR")}
                >
                  <div className="w-[195px] h-[135px] rounded-md flex flex-col justify-center items-center space-y-2">
                    <div className="size-[90px] rounded-md overflow-hidden">
                      <img
                        src="https://cdn.popsww.com/popsapp/static/baokim.png?v=1&format=webp"
                        alt=""
                      />
                    </div>
                    <span className="text-[14px] text-[#c6c6c6]">
                      ATM/Visa/QR code
                    </span>
                  </div>
                </li>
              </ul>
            </ul>
          </nav>
          {/* tóm tắt đơn hàng */}
          <ul className="pt-[30px] text-[20px] font-normal">
            <li className="py-[20px] border-b-[#c6c6c6] border-b-2 text-[24px] font-bold">
              Tóm tắt đơn hàng
            </li>
            <li className="py-[20px] flex justify-between items-center">
              <span className="">Gói POPS Stars</span>
              <span className="flex items-center space-x-2">
                <div className="size-[30px]">
                  <img
                    src="https://cdn.popsww.com/popsapp/static/images/topup/ic-coin.svg?format=webp"
                    alt=""
                  />
                </div>
                <span className="font-bold text-[#ff6a00]">255</span>
              </span>
            </li>
            <li className="py-[20px] flex justify-between items-center">
              <span className="">POPS Stars tặng thêm</span>
              <span className="flex items-center space-x-2">
                <div className="size-[30px]">
                  <img
                    src="https://cdn.popsww.com/popsapp/static/images/topup/ic-coin.svg?format=webp"
                    alt=""
                  />
                </div>
                <span className="font-bold text-[#ff6a00]">0</span>
              </span>
            </li>{" "}
            <li className="py-[20px] flex justify-between items-center">
              <span className="">Tổng POPS Starss</span>
              <span className="flex items-center space-x-2">
                <div className="size-[30px]">
                  <img
                    src="https://cdn.popsww.com/popsapp/static/images/topup/ic-coin.svg?format=webp"
                    alt=""
                  />
                </div>
                <span className="font-bold text-[#ff6a00]">255</span>
              </span>
            </li>{" "}
            <li className="py-[20px] flex justify-between items-center border-b-[1px] border-b-[#6b6b6b]">
              <span className="">Tổng tiền</span>
              <span className="flex items-center space-x-2">
                <span className="font-bold ">25.000 đ</span>
              </span>
            </li>
            <li className="py-[20px] flex justify-between items-center text-[#ff6a00]">
              <span className="">Chi phí</span>
              <span className="flex flex-col space-y-1 items-end">
                <span className="flex items-center space-x-2">
                  <div className="size-[30px]">
                    <img
                      src="https://cdn.popsww.com/popsapp/static/images/topup/ic-coin.svg?format=webp"
                      alt=""
                    />
                  </div>
                  <span className="font-bold text-[#ff6a00]">25.000 đ</span>
                </span>
                <span className="text-[12px] text-[#c6c6c6]">
                  *Giá chưa bao gồm phí vận chuyển
                </span>
              </span>
            </li>
          </ul>
          {/* nút thanh toán */}
          <div className="w-full flex justify-center">
            <Button
              text="TIẾN HÀNH THANH TOÁN"
              className="text-[20px] bg__button mt-[20px]"
            />
          </div>
        </div>
      </div>
    </Layout1>
  );
}
