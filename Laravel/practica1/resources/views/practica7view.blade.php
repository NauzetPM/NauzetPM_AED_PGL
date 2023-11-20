<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

    </head>
    <body>
    @section('content')
    <div class="container">
        @foreach ($primos as $primo)
            <h2>Tabla para el número primo: {{ $primo }}</h2>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Campo</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    @for ($i = 1; $i <= 10; $i++) {{-- Cambia 10 al número de campos que desees --}}
                        <tr>
                            <td>Campo {{ $i }}</td>
                            <td>Valor para Campo {{ $i }}</td>
                        </tr>
                    @endfor
                </tbody>
            </table>
        @endforeach
    </div>
@endsection
    </body>
</html>
