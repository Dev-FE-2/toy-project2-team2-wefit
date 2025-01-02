import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

type userData = {
  user_id: string;
  user_image: string;
  nickname: string;
};

const SimpleProfile = (userData: userData) => {
  return (
    <Link to={`/author/${userData.user_id}`} className="inline-block">
      <div className="flex items-center gap-1">
        <div className="flex h-5 w-5 justify-center overflow-auto rounded-full border border-none">
          {userData.user_image ? (
            <img
              src={userData.user_image}
              alt="프로필사진"
              className="object-cover"
            />
          ) : (
            <CgProfile size={20} />
          )}
        </div>
        <div className="text-gray-700 text-xs font-semibold">
          {userData.nickname || '데이터가 없습니다.'}
        </div>
      </div>
    </Link>
  );
};

export default SimpleProfile;
