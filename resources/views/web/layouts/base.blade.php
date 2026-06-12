@pageStart
<main>
    <h2>{{ $pageTitle ?? 'Welcome to Saola' }}</h2>
    @useBlock('content')
</main>
@pageEnd