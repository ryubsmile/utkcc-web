# The Official UTKCC Website

This repository contains the v1.0.0 source code for the UTKCC official website, created by members of the 17th UTKCC.

<span style="color:red; font-weight:bold;">Currently, the website is maintained in [@uoft-kcc/web](https://github.com/UofT-KCC/web). This repository remains here for archiving purposes of a primitive version.</span>

## Authors

- [@ryubsmile](https://www.github.com/ryubsmile): Developer.
- [Hyunjun You](https://www.instagram.com/hyunjun2003): Designer.
- [Jingeon Kim](https://github.com/JustKim04): Administrator and Maintainer.

## Documentation (Attention Maintainers-)

This documentation is intended for non-coders who wish to maintain the website with minimal coding.

The website does not use any external databases or APIs. Instead, it fetches data from the TypeScript files in the source code, which are located in the `utkcc-fe/data` (texts) and `utkcc-fe/public/assets` (images) folders.

Once you navigate to the folder, you will find several files with the `.ts` extension. You may open these files and make changes only to the ones marked with "수정 O" at the top or in the data explanation.

### Updating Emails in the Footer

Refer to `utkcc-fe/data/change-annually-data.ts`.

Here are some examples:

```typescript
...

/** KCC Email */
export const kccEmail = 'koreancommerce@gmail.com';
/** President's Email */
export const presEmail = 'seohyun.kang@mail.utoronto.ca';
/** Vice President's Email */
export const vicePresEmail = 'suye.han@mail.utoronto.ca';
/** Sponsor-Related Email (ER Director) */
export const erDirectorEmail = 'yujin.shim@mail.utoronto.ca';

...
```

Change the text within the single quotation marks to update the emails. For example:

```typescript
export const presEmail = 'jeff.ryu@mail.utoronto.ca';
```

### Updating Subscription and Recruitment-Related Form Links

Refer to the same file as above, `utkcc-fe/data/change-annually-data.ts`.

### Updating Event Data

Check the file in `utkcc-fe/data/events-data.ts`.

The data is stored in a constant variable called `eventData`. Each event is stored in the following manner:

```typescript
{
    info: {
      type: 'academic',
      slogan: ['학생의 본분을', '잊지 않기 위하여'],
      explanation:
        '대학 공부는 처음이라 버겁게 느껴진다면 UTKCC와 함께 공부해요. 코스를 수강했던 선배들에게만 들을 수 있는 팁과 문제풀이 방식을 코스 튜토리얼을 통해 배워갈 수 있습니다.',
    },
    bgImage: '/assets/images/events/academic-events.jpeg',
},
```

- Changing the text: Make changes directly in the current file.
- Changing the image: Replace the image and update the relative location in the bgImage attribute.

### Updating Sponsors Information - **Important**

WARNING: Updating the sponsor information must be done _every September_. \
Please read the instructions below and follow them.

Open the following typescript file in the source code: `utkcc-fe/data/sponsors-data.ts`.

Information of sponsors of UTKCC will be stored in the variable `sponsorsData`, in the following structure:

```typescript
{
    name: '18feet',
    exp: '𝟏𝟖𝐟𝐞𝐞𝐭 𝐄𝐬𝐩𝐫𝐞𝐬𝐬𝐨 𝐁𝐚𝐫 & 𝐂𝐡𝐞𝐨𝐧𝐠',
    imageSrc: '/assets/images/sponsors/18feet.jpeg',
    websiteUrl: 'https://www.instagram.com/18feet.ca/',
    locationUrl: 'https://goo.gl/maps/QKjbG7Xc8nK61tU86',
},
```

- All contents must be in lowercase.

  1. `name`: This will be displayed on the menubar.
  2. `exp`: Short for explanation, provide a brief description of the sponsor and its activities.
  3. `imageSrc`: Location of the image in the source code public directory. Please use the extension `.webp` or `.avif` to reduce file size if possible.
  4. `websiteUrl` and `locationUrl`: Self-explanatory; paste the URL of the website/Instagram and a location URL (Google Maps location URL is preferred).

- Updating the image: add the image under folder `utkcc-fe/public/asses/images/sponsors`.
- Adding another sponsor: add the image under folder `utkcc-fe/public/asses/images/sponsors`, and add another object at the very bottom of the array `sponsorsData`.
- Removing an existing sponsor: Remove the entire block of text enclosed in curly braces {} that contains the information. Also, delete the image file in `utkcc-fe/public/asses/images/sponsors`.

### Updating Executives Information - **Important**

WARNING: Updating the sponsor information must be done _every April and October_.\
Please follow the instructions below.

Open the TypeScript file in the source code: `utkcc-fe/data/executives-data.ts`.

Information of executive members of UTKCC will be stored in the variable `sponsorsData`, in the following structure:

```typescript
{
    dept: 'social',
    position: 'director',
    name: '홍길동',
    imageSrc: '/assets/images/exec-headshots/홍길동.webp'
    program: 'Econ. & Stat.',
    intro: ['문단1', '문단2'],
},
```

- All contents must be in lowercase.

  1. `dept`: The department the member is in, among the elements in `deptList`.
  2. `position`: The member's position
  3. `name`: Name.
  4. `imageSrc`: Location of the image in the source code public directory. Please use the extension `.webp` or `.avif` to reduce file size if possible.
  5. `program`: The member's program of study.
  6. `intro`: Include this only if the member is the president or the vice-president; otherwise, leave it as `[]`.

### Updating the Website Itself - **Danger Zone**

If the maintainer needs to change quotes or content in other areas, such as the introduction of UTKCC, please search for the corresponding text in `utkcc-fe/app/` files that end with `.tsx`.

WARNING: This is a risky action for non-coders. In case of deployment failure, the website will automatically revert to the latest working version. Please consult @ryubsmile for assistance.

## Tech Stack

**Client:** React, NextJS, TailwindCSS, Typescript

**Server:** NextJS, Typescript

## Installation, for Local Development.

1.  Clone the repository.
2.  Navigate to `utkcc-fe` folder.
3.  Run `npm install`.
4.  Under the same folder, create a file named `.env.local`, and write the following:

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

5.  Run `npm run dev`. (exit, or close dev mode using `∧c`).
6.  Commit to a new branch and make a Pull Request.
7.  Check the PR, and merge into main.

## Environment Variables

To run this project, you will need to update the following environment variables in your `.env` file, located under the `utkcc-web/utkcc-fe` folder:

```
NEXT_PUBLIC_BASE_URL=https://utkcc-web.vercel.app
```

> In this environment variable, you will need to add the base URL of the website, i.e. the home directory.

## Deployment

The deployment of this project will be done automatically via Vercel once a commit has been pushed to the `main` branch.

## Appendix

For coders and programmers in future UTKCC: we, the creators, kindly ask you to maintain and update this website for the benefit of your institution. Thank you!

## :)

Written by @ryubsmile .
