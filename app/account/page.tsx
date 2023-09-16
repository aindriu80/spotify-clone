import Header from '@/components/Header';
import AccountContent from './components/AccountContent';

const account = () => {
  return (
    <div className="w-full h-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900">
      <Header className="from-bg-neutral-900">
        <div className="flex flex-col mb-2 gap-y-6"></div>
        <div className="text-3xl font-semibold text-white">
          Account Settings
        </div>
      </Header>
      <AccountContent />
    </div>
  );
};

export default account;
