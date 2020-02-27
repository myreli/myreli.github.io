# myreli.github.io

@myreli's website. Avaliable at https://myreli.github.io, https://myreli.dev or https://myreli.co. 

why 3? [Idk.](https://www.youtube.com/watch?v=LKbjeNa8Eig)

See anything weird? Please, [contact me](https://myreli.dev/#contact) or submit a Pull Request.

## Develop 

```bash
# clone the repository
git clone https://github.com/myreli/myreli.github.io
# go to project folder
cd myreli.github.io
# install live server 
npm i -g live-server
# run http://localhost:1234
live-server . --port=1234
```

Hot reload is now enabled, you can see your changes live at http://localhost:1234.

## Localize

Localization uses i18next. To edit it, change the file `assets/js/locales/[LANGUAGE].json` matching the keys present in `index.html`.

Sample:
`index.html`
```html
<div>
	<h1 data-i18n="header.content.title">Myreli</h1>
	<p data-i18n="header.content.subtitle"></p>
</div>
```
`assets/js/locales/en.json`
```json
{
	"header": {
		"content": {
			"title": "Myreli Borba",
			"subtitle": "Girl who code" 
		}
	}
}
```

Produces: 
```html
<div>
	<h1>Myreli Borba</h1>
	<p>Girl who code</p>
</div>
```

If there are any out of date keys, update the locales keys using the i18next parser:

```bash
# install parser
npm i -g i18next-parser
# update locale keys 
i18next index.html
# check assets/js/locales folder and edit new translations
```

`index.html` is the source of truth. (for now). 

## Thanks

- Bryan Goff (on Unsplash), for this beautiful main picture
- @HugoGiraudel, for the sass functions 
- Skel (skel.io), making responsive design less painful
