import React, { FC } from 'react';
import { HeaderLogoSVG } from '../shared/header/Header.styles';
export interface ISVGProps {
  className?: string;
  push: (type: any) => void;
}

export const HeaderLogo: FC<ISVGProps> = ({ className, push }) => {
  return (
    <HeaderLogoSVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 617 301"
      className={className}
      onClick={() => push('/')}
    >
      <g fill="none" fillRule="evenodd">
        <g fill="#DB3C36">
          <g>
            <path
              d="M41.088 244.158H.496s7.634-3.81 7.634-11.083V112.549c0-8.312-7.634-10.391-7.634-10.391h85v23.897s-2.083-7.964-8.675-7.964H33.454v39.134h44.06v21.822s-1.386-5.197-7.63-5.197h-36.43v58.877c0 7.968 7.634 11.431 7.634 11.431M559.028 246.158c-29.657-.102-50.269-18.214-50.269-36.815v-96.845c0-6.894-8.263-10.34-8.263-10.34h40.63s-8.264 3.446-8.264 9.994v97.19c0 9.29 12.97 21.199 25.478 21.115 12.278-.088 24.79-11.728 24.79-21.114v-97.016c0-7.237-8.263-9.994-8.263-9.994h40.629s-8.263 2.757-8.263 9.994v97.016c0 18.098-20.556 36.909-48.205 36.815M149.028 246.158c-29.657-.102-50.269-18.214-50.269-36.815v-96.845c0-6.894-8.263-10.34-8.263-10.34h40.63s-8.264 3.446-8.264 9.994v97.19c0 9.29 12.966 21.199 25.478 21.115 12.275-.088 24.79-11.728 24.79-21.114v-97.19c0-7.238-8.263-9.995-8.263-9.995h40.629s-8.267 2.757-8.267 9.994v97.19c0 18.099-20.552 36.91-48.201 36.816M256.496 102.158s-8.206 3.45-8.206 10.694v149.045s-.42 25.876-43.766 37.261c-.89.233 19.491-21.736 19.491-37.261 0-10.351.246-143.528 0-149.045-.343-7.588-8.206-10.694-8.206-10.694h40.687M298.227 232.472c.342 7.585 8.269 10.686 8.269 10.686h-41s8.266-3.447 8.266-10.686h.042c.059-42.736.14-115.636-.042-119.628-.343-7.582-8.266-10.686-8.266-10.686h41s-8.27 3.447-8.27 10.686v119.628M372.988 118.017v114.455c.348 7.585 8.317 10.686 8.317 10.686h-41.237s8.317-3.447 8.317-10.686h.042c.05-36.71.116-96.033.021-114.455H321.01c-8.665 0-13.514 9.652-13.514 9.652l8.317-25.511h96.683l-5.892 23.445s-.348-7.586-8.662-7.586h-24.954M253.083 60.112c4.947 10.786 19.014 18.99 34.001 18.99 21.766 0 39.412-17.673 39.412-39.475 0-21.8-17.646-39.469-39.412-39.469-11.865 0-22.502 5.245-29.727 13.55l.269 20.912c1.252-14.343 16.798-22.453 29.458-22.107 14.963.409 27.1 12.156 27.1 27.145 0 14.993-12.133 27.145-27.1 27.145-9.622 0-17.904-5.192-22.711-12.763l-1.253-2.415c-5.404-10.035-16.372-17.77-29.022-17.77-18.009 0-32.602 14.619-32.602 32.651 0 18.033 14.593 32.652 32.602 32.652 10.316 0 19.516-4.8 25.492-12.296V72.195l-11.768 9.8c-3.52 2.429-8.662 4.494-13.724 4.494-11.017 0-19.952-8.949-19.952-19.983s8.935-19.979 19.952-19.979c8.15 0 14.83 5.077 18.752 13.148l.233.437M486.538 124.647V107.27c0-2.408-15.81-6.012-25.836-6.11-7.253-.073-49.33 1.63-49.33 38.285 0 30.113 31.796 41.984 35.941 44.046 4.149 2.066 27.472 12.391 27.472 24.778 0 16.177-13.823 24.265-30.412 24.265-16.588 0-30.082-10.705-33.867-13.94-.29-.251 5.705 24.778 5.705 24.778s14.994 3.786 27.647 3.786c5.876 0 55.638 0 55.638-39.23 0-29.768-30.584-40.435-36.632-43.363-5.56-2.687-27.128-11.012-27.128-26.498 0-12.387 14.86-22.712 25.92-22.712 15.572 0 21.08 4.99 24.882 9.292"
              transform="translate(-412 -47) translate(412.504 47.842)"
            />
          </g>
        </g>
      </g>
    </HeaderLogoSVG>
  );
};
