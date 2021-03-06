const createReadMeFile = (response) =>{
const {title, description,installation,contributing,userStory,acceptCriteria,licence,img,test,credits,howToContact,email,username} = response;
return`## ${title}

- [Description](#Description)
- [Installations](#Installations)
- [Licence](#Licence)
- [Contributing](#Contributing)
- [User Story](#User-Story)
- [Acceptance Criteria](#Acceptance-Criteria)
- [Test](#Test)
- [Credits](#Credits)
- [Questions](#Questions)

## Description

${description}

## Installations

${installation}

## Contributing

${contributing}

## User-Story

\`\`\`
${userStory}
\`\`\`

## Acceptance-Criteria

\`\`\`
${acceptCriteria}
\`\`\`

## Licence

-[${licence}](https://opensource.org/licenses/${response.licence})

## Test

[![image](${img})](${test})

## Credits

${credits}

## Questions
${howToContact}
<br>
-Email: [${email}](mailto:${email})
<br>
-GitHub Username: [${username}](https://github.com/${username}) 
`;
}


module.exports = createReadMeFile;