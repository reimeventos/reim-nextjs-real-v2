import Link from 'next/link';
import { Brand } from '@/components/Brand';
import { Nav } from '@/components/Nav';

const categories = ['📸 Foto', '🍽️ Buffet', '🌸 Decoração', '📷 Totem', '💍 Cerimonial', '🎵 Música', '🎂 Doces', '💄 Make'];

export default function HomePage() {
  return (
    <main className="reim-shell pb-24">
      <section className="reim-hero rounded-b-[34px] px-5 pb-8 pt-6 text-white">
        <div className="mb-4 flex justify-between">
          <Link className="rounded-2xl bg-white/15 px-4 py-2 text-sm" href="/login">Entrar</Link>
          <Link className="rounded-2xl bg-white/15 px-4 py-2 text-sm" href="/admin">Admin</Link>
        </div>
        <Brand />
        <Link href="/buscar" className="mt-6 block rounded-2xl bg-white p-4 text-gray-500 shadow-xl">🔎 O que você procura para seu evento?</Link>
      </section>

      <section className="p-5">
        <div className="grid grid-cols-4 gap-3">
          {categories.map((c) => <Link href="/buscar" key={c} className="rounded-3xl border border-reimBorder bg-white p-3 text-center text-xs shadow-sm">{c}</Link>)}
        </div>

        <div className="mt-5 rounded-3xl bg-reimBlack p-5 text-white">
          <div className="flex items-center justify-between">
            <div>
              <b>✨ Planeje seu evento</b>
              <p className="mt-1 text-sm text-white/70">Monte sua lista e organize tudo em um só lugar.</p>
            </div>
            <span className="text-4xl">❤️</span>
          </div>
          <Link href="/meu-evento" className="mt-4 block rounded-2xl bg-reimGold py-4 text-center font-bold">CRIAR / VER MEU EVENTO</Link>
        </div>

        <h2 className="mb-3 mt-6 text-xl font-bold">Fornecedores Destaque</h2>
        <Link href="/fornecedor/demo" className="block overflow-hidden rounded-3xl border border-reimBorder bg-white shadow-sm">
          <img className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=900&auto=format&fit=crop" alt="" />
          <div className="p-4"><b>Bella Foto Premium</b><p className="text-sm text-gray-500">Fotografia • Porto Seguro • ⭐ 4.9</p></div>
        </Link>
      </section>
      <Nav />
    </main>
  );
}
