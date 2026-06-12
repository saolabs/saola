
@block('content')
    <h1>Welcome to the Demo Page, {{ $name }}!</h1>
    @if($user)
        <p>{{$user['name']}}</p>
    @endif
@endblock
