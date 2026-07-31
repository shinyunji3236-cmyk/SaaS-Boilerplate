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
          <Link href="#map">찾아오시는길</Link>
        </li>

        <li>
          <Link href="#stores">점포안내</Link>
        </li>

        <li>
          <Link href="#story">시장이야기</Link>
        </li>

        <li>
          <Link href="#today">오늘의시장</Link>
        </li>
      </CenteredMenu>
    </Section>
  );
};
