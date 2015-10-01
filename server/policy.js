BrowserPolicy.framing.disallow();
// BrowserPolicy.content.allowInlineScripts();
// BrowserPolicy.content.disallowEval();

// This is unfortunately required for UIKit dropdown menu to function properly (e.g. setting click mode)
// Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src 'self' 'unsafe-inline'".
BrowserPolicy.content.allowEval();

// BrowserPolicy.content.allowImageOrigin('http://placehold.it');
// BrowserPolicy.content.allowImageOrigin('https://placeholdit.imgix.net');

BrowserPolicy.content.allowFontDataUrl();

// FIXME this one can probably be improvsd font css
BrowserPolicy.content.allowOriginForAll("*.googleapis.com");
BrowserPolicy.content.allowOriginForAll("*.gstatic.com");

// Looks like Accordion needs this
// BrowserPolicy.content.disallowInlineStyles();
