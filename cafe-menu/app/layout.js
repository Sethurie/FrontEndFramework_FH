import "./globals.css";

export const metadata = {
  title: "루나 카페 메뉴판",
  description: "루나 카페의 메뉴를 확인하고 주문해 보세요",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
