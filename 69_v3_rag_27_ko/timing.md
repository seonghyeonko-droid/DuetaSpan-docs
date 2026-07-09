# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 룩스 아우룬케 작곡가의 출생 연도를 알고 싶어요. | S2 아, 그렇군요. 그럼 그분이 활동했던 시기는 언제인가요? | S3 그분이 주로 어떤 스타일의 음악을 했는지 혹시 아세요? | S4 주로 어떤 악기를 사용했는지도 궁금해요.

     0.00s  user  발화 시작: 룩스 아우룬케 작곡가의 출생 연도를 알고 싶어요.
     3.24s  user  발화 끝
     3.33s  <ret> 발화 (turn1 첫 프레임)
     3.41s  agent 발화 시작: <ret> 룩스 아우룬케에 대해 궁금하시군요.
     5.01s  ⚡SPAN 주입 [d'=1.68s / d_lead=2.77s]: Lux Aurunque was born in nineteen seventy.
     6.08s  agent 발화 시작: 룩스 아우룬케는 천구백칠십년에 태어났어요.
     6.19s  agent 발화 끝
     9.59s  agent 발화 끝
     9.96s  user  발화 시작: 아, 그렇군요. 그럼 그분이 활동했던 시기는 언제인가요?
    12.70s  <ret> 발화 (turn4 첫 프레임)
    12.77s  agent 발화 시작: <ret> 그 시기에 대해서도 궁금하시군요.
    12.92s  user  발화 끝
    14.30s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.45s]: Lux Aurunque’s compositional career spanned from 1995 to 2003.
    15.09s  agent 발화 시작: 룩스 아우룬케는 천구백구십오년부터 천삼년까지 작곡 활동을 했어요.
    15.21s  agent 발화 끝
    18.09s  user  발화 시작: Yeah, yeah.
    19.09s  user  발화 끝
    20.69s  agent 발화 끝
    20.92s  user  발화 시작: 그분이 주로 어떤 스타일의 음악을 했는지 혹시 아세요?
    24.11s  agent 발화 시작: 그 스타일—
    24.12s  user  발화 끝
    24.47s  user  발화 시작: 주로 어떤 악기를 사용했는지도 궁금해요.
    25.20s  agent 발화 끝
    26.30s  <ret> 발화 (turn10 첫 프레임)
    26.68s  agent 발화 시작: <ret> 그 악기에 대해 말씀해 드릴게요.
    26.86s  user  발화 끝
    27.34s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.12s]: Aurunque primarily used synthesizers and electronic percussion in his 
    28.77s  agent 발화 시작: 룩스 아우룬케는 주로 신시사이저와 전자 드럼을 사용했어요.
    28.81s  agent 발화 끝
    33.07s  agent 발화 끝
