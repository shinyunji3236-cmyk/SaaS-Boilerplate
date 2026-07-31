import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';
import { Link } from '@/libs/I18nNavigation';
import { Logo } from './Logo';

export const Navbar = () => {
  return (
    <Section className="px-3 py-6">
      <CenteredMenu
        logo={<Logo />}
        rightMenu={(
          <>
            <li>
              <LocaleSwitcher />
            </li>
          </>
        )}
      >
        <li>
          <Link href="#team">팀 소개</Link>
        </li>

        <li>
          <Link href="#stores">영등포 시장 이야기</Link>
        </li>

        <li>
          <Link href="#map">오시는 길</Link>
        </li>

      </CenteredMenu>
    </Section>
  );
};
