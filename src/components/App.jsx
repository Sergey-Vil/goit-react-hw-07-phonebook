import { ContactsBook } from './ContactsBook/ContactsBook';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101',
        listStyle: 'circle',
      }}
    >
      <ContactsBook />
    </div>
  );
};
