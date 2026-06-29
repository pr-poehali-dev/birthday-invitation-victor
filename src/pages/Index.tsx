import Icon from '@/components/ui/icon';

const MASCOT = 'https://cdn.poehali.dev/projects/32199fa2-bc3e-4c42-921e-946c43d8385a/files/72e72d5b-fc6d-4e81-952a-ccae9c5d0728.jpg';

const Balloon = ({ color, className, delay }: { color: string; className: string; delay: string }) => (
  <div className={`absolute ${className}`} style={{ animationDelay: delay }}>
    <div className="relative animate-float-slow" style={{ animationDelay: delay }}>
      <div
        className="w-14 h-[68px] rounded-full shadow-lg"
        style={{ background: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.65), ${color} 60%)` }}
      />
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-[-5px] w-0 h-0 border-l-[6px] border-r-[6px] border-t-[9px] border-l-transparent border-r-transparent"
        style={{ borderTopColor: color }}
      />
      <div className="absolute left-1/2 top-[66px] w-px h-12 bg-white/50" />
    </div>
  </div>
);

const Index = () => {
  const details = [
    { icon: 'CalendarDays', label: 'Когда', value: '8 июля', sub: 'в 18:00' },
    { icon: 'MapPin', label: 'Где', value: '«Вольный стрелок»', sub: 'ул. Крылова, 21' },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0e7c86] p-4 font-body">
      {/* Story 9:16 frame */}
      <div className="relative w-full max-w-[420px] aspect-[9/16] overflow-hidden rounded-[2rem] shadow-2xl">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, #2ec4c4 0%, #1aa3ad 45%, #15808f 100%)' }}
        />
        {/* Soft glow blobs */}
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#ffd84d]/30 blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-72 h-72 rounded-full bg-[#ff7a59]/30 blur-3xl" />

        {/* Confetti dots */}
        {[
          'top-[8%] left-[12%] bg-[#ffd84d]', 'top-[14%] right-[16%] bg-[#ff7a59]',
          'top-[40%] left-[8%] bg-[#ffffff]', 'top-[55%] right-[10%] bg-[#ffd84d]',
          'top-[72%] left-[18%] bg-[#ff7a59]', 'top-[30%] right-[28%] bg-[#ffffff]',
        ].map((c, i) => (
          <span
            key={i}
            className={`absolute w-2.5 h-2.5 rounded-full opacity-80 animate-float ${c}`}
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}

        {/* Floating balloons */}
        <Balloon color="#ff7a59" className="top-6 left-5" delay="0s" />
        <Balloon color="#ffd84d" className="top-2 right-6" delay="1.2s" />
        <Balloon color="#ffffff" className="top-24 right-2 scale-75" delay="0.6s" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center text-center px-7 py-10">
          <p className="mt-4 text-white/85 tracking-[0.35em] text-xs font-semibold uppercase animate-fade-up">
            Приглашение
          </p>
          <p className="mt-2 text-white/90 text-base font-medium animate-fade-up" style={{ animationDelay: '0.1s' }}>
            на День Рождения
          </p>

          {/* Name */}
          <h1
            className="mt-3 font-display text-[#fff3d6] text-6xl leading-none drop-shadow-[0_4px_0_rgba(0,0,0,0.12)] animate-pop-in"
            style={{ animationDelay: '0.2s' }}
          >
            Виктор
          </h1>

          {/* Age badge */}
          <div className="mt-4 animate-pop-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative inline-flex items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-[#ffd84d] blur-md opacity-60" />
              <span className="relative flex items-center gap-1 bg-[#ffd84d] text-[#15808f] font-extrabold text-2xl px-6 py-2 rounded-full shadow-lg">
                <Icon name="PartyPopper" size={22} />
                7 лет
              </span>
            </div>
          </div>

          {/* Mascot */}
          <div className="relative mt-3 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="absolute inset-0 rounded-full bg-white/15 blur-xl" />
            <img
              src={MASCOT}
              alt="Праздничный персонаж"
              className="relative w-40 h-40 object-cover rounded-full border-4 border-white/70 shadow-xl animate-float"
            />
          </div>

          {/* Details card */}
          <div
            className="mt-auto w-full bg-white/95 backdrop-blur rounded-3xl p-5 shadow-2xl animate-fade-up"
            style={{ animationDelay: '0.65s' }}
          >
            <div className="space-y-3">
              {details.map((d) => (
                <div key={d.label} className="flex items-center gap-3 text-left">
                  <div className="shrink-0 w-11 h-11 rounded-2xl bg-[#2ec4c4]/15 flex items-center justify-center text-[#15808f]">
                    <Icon name={d.icon} size={22} />
                  </div>
                  <div>
                    <p className="text-[#15808f]/60 text-[11px] uppercase tracking-wider font-semibold">{d.label}</p>
                    <p className="text-[#143b40] font-bold text-lg leading-tight">{d.value}</p>
                    <p className="text-[#143b40]/70 text-sm">{d.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-dashed border-[#15808f]/20 flex items-start gap-2 text-left">
              <span className="text-[#ff7a59] font-extrabold leading-none mt-0.5">*</span>
              <p className="text-[#143b40]/75 text-[13px] leading-snug">
                Приходите за 15 минут до начала, с собой — сменную обувь 👟
              </p>
            </div>
          </div>

          <p className="mt-4 text-white/80 text-sm font-medium animate-fade-up" style={{ animationDelay: '0.8s' }}>
            Будет весело — ждём тебя! 🎉
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
