export default function FooterContactInfo() {
  const kccEmail = 'koreancommerce@gmail.com';
  const presEmail = 'seohyun.kang@mail.utoronto.ca';
  const vicePresEmail = 'suye.han@mail.utoronto.ca';
  const erDirectorEmail = 'yujin.shim@mail.utoronto.ca';

  return (
    <div className="flex flex-col min-h-[20vh] mt-[10vh] p-8 bg-kcc-theme text-white font-normal">
      <div className="text-center">Contact Information</div>
      <div className="flex flex-col my-3 text-xs">
        <div>General Inquiries: {kccEmail}</div>
        <div>President: {presEmail}</div>
        <div>Vice-president: {vicePresEmail}</div>
        <div>Sponsor Inquiries: {erDirectorEmail}</div>
        <div className="pt-8 pb-2 opacity-50">
          Designed by Hyunjun You, <br /> Created by Jaehyuk Ryu and Jingeon Kim
        </div>
      </div>
    </div>
  );
}
