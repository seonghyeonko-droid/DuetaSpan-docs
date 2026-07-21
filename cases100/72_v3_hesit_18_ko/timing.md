# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 음… 혹시 스타 이즈 본, 제일 처음 나온 게 언제였지? | S2 아, 옛날 영화들은 다 그렇게 이름이 낯설어. 요즘 영화들은  | S3 바비? 그거 좀 웃기던데. | S4 음… 그냥 한식.

     0.00s  user  발화 시작: 음… 혹시 스타 이즈 본, 제일 처음 나온 게 언제였지?
     3.38s  <ret> 발화 (turn1 첫 프레임)
     3.48s  agent 발화 시작: <ret> 제일 처음 스타 이즈 본에 출연한 건 천구백삼십칠년의 재닛 게이너였어요.
     3.63s  user  발화 끝
     4.56s  ⚡SPAN 주입 [d'=1.18s / d_lead=4.99s]: Janet Gaynor starred in the first Star is Born in 1937.
     8.48s  agent 발화 끝
     8.57s  user  발화 시작: 재닛 게이너… 이름이 좀 낯설긴 한데.
    11.99s  user  발화 끝
    12.05s  agent 발화 시작: 처음 들어보시는 분일 수도 있겠네요.
    14.04s  user  발화 시작: 그… 아, 옛날 영화구나. 혹시 다른 배우들도 있었어?
    14.07s  agent 발화 끝
    17.00s  <ret> 발화 (turn5 첫 프레임)
    17.39s  agent 발화 시작: <ret> 천구백삼십칠년 스타 이즈 본에는 프레드릭 마치도 함께 출연했어요.
    17.51s  user  발화 끝
    18.05s  ⚡SPAN 주입 [d'=1.05s / d_lead=4.30s]: Fredric March also starred in the 1937 version of A Star is Born.
    21.62s  user  발화 시작: 프레드릭 마치… 그 사람도 오래된 배우인가 보네.
    21.69s  agent 발화 끝
    24.62s  user  발화 끝
    24.65s  agent 발화 시작: 네, 프레드릭 마치도 꽤 오래된 배우시죠.
    26.49s  user  발화 시작: 응.
    26.94s  user  발화 끝
    27.28s  agent 발화 끝
    27.91s  user  발화 시작: 아, 옛날 영화들은 다 그렇게 이름이 낯설어. 요즘 영화들은 누가 나왔는지 바로 알겠던데.
    33.21s  agent 발화 시작: 요즘 영화는 더 쉽게 접할 수 있으니까 그럴 거예요.
    33.28s  user  발화 끝
    34.34s  user  발화 시작: 그래.
    34.74s  user  발화 끝
    36.31s  agent 발화 끝
    36.47s  user  발화 시작: 요즘 영화는… 음… 혹시 최근에 나온 영화 중에 볼 만한 거 있어?
    39.21s  agent 발화 시작: 예.
    39.61s  agent 발화 끝
    41.15s  agent 발화 시작: 어떤 장르를 좋아하시나요?
    41.16s  user  발화 끝
    42.99s  agent 발화 끝
    43.12s  user  발화 시작: 그냥… 재미있는 거. 코미디?
    46.04s  <ret> 발화 (turn16 첫 프레임)
    46.16s  agent 발화 시작: <ret> 요즘 인기 있는 코미디 영화는 '바비'(이천이십삼), '슈퍼 마리오 브라더스'(이천이십삼), '노
    46.19s  user  발화 끝
    46.64s  ⚡SPAN 주입 [d'=0.60s / d_lead=8.21s]: (tool result) "Top comedy movies: 'Barbie' (2023), 'The Super Mario Br
    54.31s  user  발화 시작: 바비? 그거 좀 웃기던데.
    54.37s  agent 발화 끝
    56.09s  agent 발화 시작: 네, '바비'는 많은 분들이 재미있다고 하시더라고요.
    56.15s  user  발화 끝
    57.52s  user  발화 시작: 맞아.
    58.18s  user  발화 끝
    58.86s  agent 발화 끝
    58.93s  user  발화 시작: 아, 그럼 '바비' 예매해 줘. 이번 주 토요일 저녁 일곱시에.
    60.14s  agent 발화 시작: 예.
    60.45s  agent 발화 끝
    62.31s  <ret> 발화 (turn22 첫 프레임)
    62.69s  agent 발화 시작: <ret> 네, '바비' 영화, 이천이십육년 칠월 십일일 저녁 일곱시로 두장 예매 완료되었습니다. 총 비용은
    62.73s  user  발화 끝
    63.54s  ⚡SPAN 주입 [d'=1.23s / d_lead=7.18s]: (tool result) "Booking confirmed: Barbie, July 11, 2026, 7:00 PM, 2 ti
    69.86s  agent 발화 끝
    70.63s  user  발화 시작: 오, 고마워!
    71.70s  user  발화 끝
    71.77s  agent 발화 시작: 천만에요. 즐거운 시간 보내세요.
    74.30s  agent 발화 끝
    76.11s  user  발화 시작: 아, 그리고… 혹시 토요일 저녁에 맛있는 저녁 먹을 만한 곳도 추천해 줄 수 있어?
    78.39s  agent 발화 시작: 네.
    78.83s  agent 발화 끝
    81.86s  user  발화 끝
    82.00s  agent 발화 시작: 어떤 종류의 음식을 좋아하세요?
    83.83s  agent 발화 끝
    83.86s  user  발화 시작: 음… 그냥 한식.
    85.28s  <ret> 발화 (turn29 첫 프레임)
    85.53s  agent 발화 시작: <ret> 근처 한식집으로는 '한쿡'(평점 사 점 오, 가격 보통), '서울 가든'(평점 사 점 이, 가격 
    85.64s  user  발화 끝
    86.57s  ⚡SPAN 주입 [d'=1.29s / d_lead=7.74s]: (tool result) "Nearby Korean restaurants: 'Han Cook'(rating 4.5, price
    93.22s  user  발화 시작: '한쿡'으로 예약해 줘. 토요일 저녁 일곱시 반. 두 명.
    93.27s  agent 발화 끝
    96.31s  agent 발화 시작: 네네.
    96.90s  agent 발화 끝
    97.19s  <ret> 발화 (turn32 첫 프레임)
    97.63s  agent 발화 시작: <ret> 네, '한쿡' 식당, 이천이십육년 칠월 십일일 저녁 일곱시 반으로 두명 예약 완료되었습니다.
    97.72s  user  발화 끝
    98.44s  ⚡SPAN 주입 [d'=1.25s / d_lead=6.11s]: (tool result) "Reservation confirmed at Han Cook for July 11, 2026, 7:
   103.74s  user  발화 시작: 알았어, 고마워.
   103.75s  agent 발화 끝
   105.25s  agent 발화 시작: 즐거운 주말 보내세요.
   105.30s  user  발화 끝
   106.81s  agent 발화 끝
