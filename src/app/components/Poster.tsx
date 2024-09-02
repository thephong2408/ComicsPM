"use client";
import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import Button from "./Button";
import { IoIosAdd } from "react-icons/io";
interface PosterProps {
  text: string; // Nội dung của nút
  onClick?: () => void; // Hàm xử lý sự kiện khi bấm nút (tùy chọn)
  className?: string; // Các lớp CSS tùy chỉnh (tùy chọn)
  icon?: React.ReactNode; // Icon cho nút (tùy chọn)
  iconClassName?: string; // Các lớp CSS tùy chỉnh cho icon (tùy chọn)
  show?: boolean;
}
export default function Poster({
  text = "🎉ƯU ĐÃI CỰC CHÁY🔥",
  onClick,
  className,
  icon,
  iconClassName,
  show = true,
}: PosterProps) {
  return (
    <div className="w-full h-[630px] bg-[url('https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_assets/thumb_ngang_1920x1080_notext-75ac83d4baa5-1710817279196-thWolNWJ.jpg?v=0&maxW=1400&format=webp')] bg-cover bg-center bg-no-repeat">
      <div className="w-full h-full bg_img1 py-[35px] px-[100px] flex flex-col ">
        {/* img */}
        <span className="flex items-center space-x-[5px] mb-5">
          {/* <div className="w-[8px] h-[40px] rounded-full bg__title"></div> */}
          <span className="relative ">
            <FaHandPointRight className="text-[50px] text-[#f47213]" />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[18px] font-bold text-white">
              %
            </span>
          </span>
          <span className="text-[36px] font-bold text-white ">{text}</span>
        </span>
        <div className="flex space-x-5">
          <div className="w-[50%] ">
            <div className="h-[385px] rounded-md overflow-hidden shadow-lg">
              <img
                src="https://pops-images-vn.akamaized.net/api/v2/containers/file2/cms_assets/thumb_ngang_1920x1080_notext-75ac83d4baa5-1710817279196-thWolNWJ.jpg?v=0&maxW=1400&format=webp"
                alt=""
              />
            </div>
          </div>
          <div className="w-[50%] space-y-5">
            {show && (
              <>
                {" "}
                <ul className="text-[36px] font-bold text-white ">
                  Bệ Hạ Kiếp Này Ta Sẽ Hết Lòng Chăm Sóc Người
                </ul>
                <ul className="space-y-3 ">
                  <li className="text-[#ccc]">
                    Tác Giả : <span className="text-white">Phong</span>
                  </li>
                  <li className="text-[#ccc]">
                    Hoạ sĩ : <span className="text-white">Phong</span>
                  </li>
                  <li className="text-[#ccc]">
                    Thể loại : <span className="text-[#f47213]">Phong</span>
                  </li>
                  <li className="text-[#ccc]">
                    Nội dung bởi : <span className="text-[#f47213]">Phong</span>
                  </li>
                  <li className="text-[#ccc] break-words ">
                    <h3>MÔ TẢ :</h3>
                    <span className={`text-white text-[20px] truncate-lines-3`}>
                      Một công ty tưởng bình thường nhưng vô cùng bất thường,
                      với nhân viên là những người đi làm vì đam mê chứ nhà là
                      tỷ phú, là con ông cháu cha được nhận vì tài năng gây war,
                      là một gián điệp kinh tế nhưng lại hay giúp kẻ địch phát
                      tài.....Hãy đến với Kiếp Văn Phòng và 7749 tình huống xử
                      lý đi vào lòng đất khi đối diện với khách hàng.
                    </span>
                  </li>
                </ul>
              </>
            )}
            <ul className={`space-x-[15px] flex ${show ? "" : "mt-10"}`}>
              <Button
                text={"KHÁM PHÁ NGAY"}
                className={"text-white bg__button"}
              />

              <Button
                text={"YÊU THÍCH"}
                icon={<IoIosAdd />}
                iconClassName="text-[25px]"
                className="text-black bg-white"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
