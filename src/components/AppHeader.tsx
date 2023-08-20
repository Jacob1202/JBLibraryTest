import Link from "next/link";

export default function AppHeader() {
  return (
    <nav className="container mx-auto flex h-16 items-center justify-between">
      <div className="flex space-x-4">
        <div>JBLibrary</div>
        <div className="flex space-x-4">
          <s>
            <Link href="/dashboard" className="">
              Documentation
            </Link>
          </s>
          <s>
            <Link href="/">Design</Link>
          </s>
        </div>
      </div>
      <div>
        <Link href="/">Login</Link>
      </div>
    </nav>
  );
}
