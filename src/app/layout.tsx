"use client";

import "./reset.css";
import "./globals.css";
import styled from "@emotion/styled";
import { usePathname } from 'next/navigation';
import { Header } from "@/components/layouts/Header/Header";
import { Sidebar } from "@/components/layouts/Sidebar/Sidebar";
import { LogoSvg } from "@/components/elements/Svg/LogoSvg";
import { replaceInitialsToCapitals } from "@/utils";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = usePathname()
  const pageTitle = replaceInitialsToCapitals(params.replace("/", ""))
  
  const Wrapper = styled.div`
    display: flex;
    height: 100vh;
  `;

  const MainWrapper = styled.div`
    width: calc(100% - 250px);
  `;

  const Main = styled.main`
    padding: 0 1.5rem;
  `

  const Aside = styled.aside`
    max-width: 250px;
    width: 100%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  `;

  const LogoWrapper = styled.div`
    text-align: center;
    padding: 2rem;
  `;

  return (
    <html lang="ja">
      <body>
        <Wrapper>
          <Aside>
            <LogoWrapper>
              <LogoSvg width="50px" height="50px" />
            </LogoWrapper>
            <Sidebar />
          </Aside>
          <MainWrapper>
            <Header pageTitle={pageTitle} />
            <Main>{children}</Main>
          </MainWrapper>
        </Wrapper>
      </body>
    </html>
  );
}
