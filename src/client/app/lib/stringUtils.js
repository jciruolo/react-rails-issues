export function atMentionsToGithubMarkdownLinks(str) {
  const atMentionPattern = /\B@[a-z0-9_-]+/gi;
  if (str.indexOf('@') === -1) {
    return str;
  }
  let transformedString = str.replace(atMentionPattern, (atMention) => {
    return `[${atMention}](http://github.com/${atMention.split('@')[1]})`;
  });
  return transformedString;
}
