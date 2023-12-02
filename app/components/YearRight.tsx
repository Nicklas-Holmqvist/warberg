import React from 'react';

interface YearRightProps {}

const YearRight: React.FC<YearRightProps> = ({}) => {
  return (
    <article className="grid grid-cols-2">
      <div className="border-r-2 justify-self-end">
        <p className="p-10 pr[2.75rem] pt-14 max-w-[50rem] leading-5">
          Långt innan Varbergs fästning byggdes användes berget Wardberg för
          bevakning. Första ledet i bergets namn – Ward – betyder vakt. Om
          fiender närmade sig från havet tände vakter en stor eld (vårdkase) på
          berget som signal för försvar. I slutet av 1200-talet byggdes en borg
          på klippan. Den som då innehade Norra Halland var den danske greven
          Jakob Nielsen. Han anklagades för delaktighet i mordet på den danske
          kungen Erik Klipping 1286. Som skydd mot sina fiender lät han bygga en
          stenborg som stod färdig runt år 1300. Norra slottslängan finns kvar
          från denna tid
        </p>
      </div>
      <div className="">
        <h3 className="relative w-[13rem] text-right border-0 border-b-2 border-solid">
          1200-talet
          <span className="absolute w-2 p-1 border rounded-full outline outline-8 outline-[#100b00] bg-white bottom-[-6px] left-[-6px]"></span>
        </h3>
      </div>
    </article>
  );
};

export default YearRight;
