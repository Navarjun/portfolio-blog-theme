export default (data: Lume.Data, helpers: Lume.Helpers) => (
    <nav className="width-1/1 ">
        <ul>
            <li>
                <a className="h1" href="#">
                    <strong>{data.metas && data.metas.site ? (data.metas.site as string) : "Site name"}</strong>
                </a>
            </li>
        </ul>
        <ul>
            {/* {{ for data.obj of navigation }}
        <li data-id="{{ obj.id }}">
          <a href="{{ obj.url }}"> {{ obj.name }} </a>
        </li>
      {{ /for }} */}
        </ul>
    </nav>
);
