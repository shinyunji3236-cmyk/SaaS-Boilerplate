import { ArrowRightIcon } from '@radix-ui/react-icons';
import { badgeVariants } from '@/components/ui/badgeVariants';
import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';

export const Hero = () => {
  return (
    <Section className="py-36">
      <CenteredHero
        banner={(
          <div className={badgeVariants()}>
            전통시장 공식 안내 웹사이트
          </div>
        )}
        title={(
          <>
            정성과 정이 가득한{' '}
            <span className="
              bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500
              bg-clip-text text-transparent
            "
            >
              전통시장
            </span>
            에 오신 것을 환영합니다
          </>
        )}
        description="신선한 먹거리와 다양한 즐길 거리, 따뜻한 정이 기다리고 있습니다. 시장 매장 정보부터 이벤트까지 한눈에 확인해 보세요!"
        buttons={(
          <>
            <a
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
              href="#map"
            >
              오시는 길
            </a>

            <a
              className={buttonVariants({ size: 'lg' })}
              href="#stores"
            >
              점포 둘러보기
              <ArrowRightIcon className="ml-1 size-5" />
            </a>
          </>
        )}
      />
    </Section>
  );
};
