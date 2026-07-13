# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "채영",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-08-28",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-07-17",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-06-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-28",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-21",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시, '굿 다이노'에 나오는 티렉스 목소리는 누구야? | S2 음… 서부극 같은 거 좋아하는데… | S3 음… 액션 영화! | S4 응, 좋아. 이탈리안 레스토랑으로 찾아줘.

     0.00s  user  발화 시작: 혹시, '굿 다이노'에 나오는 티렉스 목소리는 누구야?
     3.39s  <ret> 발화 (turn1 첫 프레임)
     3.79s  agent 발화 시작: <ret> '굿 다이노'에서 부치 캐릭터의 목소리는 샘 엘리엇 씨가 맡으셨어요.
     3.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.87s]: Sam Elliott voiced the character of Butch in The Good Dinosaur.
     3.79s  user  발화 끝
     8.65s  agent 발화 시작: 혹시 다른 궁금한 영화 정보가 있으신가요?
     8.65s  agent 발화 끝
    11.90s  user  발화 시작: 어.
    11.90s  agent 발화 끝
    12.44s  user  발화 시작: 샘 엘리엇… 음… 그분이 다른 영화에도 많이 출연했나?
    12.44s  user  발화 끝
    16.60s  <ret> 발화 (turn5 첫 프레임)
    16.76s  agent 발화 시작: <ret> 네, 샘 엘리엇 씨는 영화와 티 브이 프로그램에 백 편이 넘게 출연하셨답니다.
    16.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.49s]: Sam Elliott has appeared in over one hundred films and television show
    16.76s  user  발화 끝
    23.25s  user  발화 시작: 그래.
    23.25s  agent 발화 끝
    23.79s  user  발화 시작: 그… 텔레비전 프로그램은 어떤…
    23.79s  user  발화 끝
    25.96s  user  발화 시작: …게 유명해? … 지금 생각해보니
    25.96s  user  발화 끝
    28.66s  agent 발화 시작: 어떤 장르의 티 브이 프로그램을 선호하시나요?
    28.66s  user  발화 끝
    31.91s  user  발화 시작: 음… 서부극 같은 거 좋아하는데…
    31.91s  agent 발화 끝
    34.53s  <ret> 발화 (turn11 첫 프레임)
    34.61s  agent 발화 시작: <ret> 서부극을 좋아하신다면, '더 새킷츠'라는 작품에서 샘 엘리엇 씨의 연기를 감상하실 수 있어요.
    34.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.49s]: Sam Elliott is known for his roles in Western films and television ser
    34.61s  user  발화 끝
    41.10s  agent 발화 시작: 그 외에도 다양한 서부극에 출연하셨답니다.
    41.10s  agent 발화 끝
    43.80s  user  발화 시작: '더 새킷츠'… 한번 찾아봐야겠다. 근데, 혹시 지금 서울 날씨는 어때?
    43.80s  agent 발화 끝
    49.05s  <ret> 발화 (turn14 첫 프레임)
    49.21s  agent 발화 시작: <ret> 현재 서울의 기온은 섭씨 이십삼도이고, 습도는 칠십사퍼센트, 바람은 시속 오 점 오킬로미터로 측정
    49.21s  ⚡SPAN 주입 [d'=1.28s / d_lead=7.03s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    49.21s  user  발화 끝
    56.24s  agent 발화 시작: 오늘 하루도 좋은 날씨네요.
    56.24s  agent 발화 끝
    58.40s  user  발화 시작: 이십삼도면 괜찮네. 혹시 이번 주 토요일에…
    58.40s  agent 발화 끝
    61.65s  user  발화 시작: …영화 보러 갈 만한 곳 있어?
    61.65s  user  발화 끝
    64.73s  <ret> 발화 (turn18 첫 프레임)
    64.89s  agent 발화 시작: <ret> 네, 말씀하신 날짜는 칠월 십일일 토요일이네요.
    64.89s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.24s]: [2026-07-10] 영화 보러 갈 만한 곳 있어?
    64.89s  user  발화 끝
    68.14s  agent 발화 시작: 어떤 종류의 영화를 보고 싶으세요?
    68.14s  agent 발화 끝
    70.84s  user  발화 시작: 음… 액션 영화!
    70.84s  agent 발화 끝
    72.14s  <ret> 발화 (turn21 첫 프레임)
    72.46s  agent 발화 시작: <ret> 칠월 십일일 토요일에 강남 씨 지 브이에서 '미션 임파서블: 데드 레코닝 파트 이'를 상영하는데요
    72.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.82s]: (tool result) "Mission: Impossible - Dead Reckoning Part Two" at CGV G
    72.46s  user  발화 끝
    83.28s  agent 발화 시작: 혹시 다른 시간대도 괜찮으신가요?
    83.28s  agent 발화 끝
    85.44s  user  발화 시작: 오후 두시로 예매해줘.
    85.44s  agent 발화 끝
    86.66s  <ret> 발화 (turn24 첫 프레임)
    87.06s  agent 발화 시작: <ret> 네, '미션 임파서블: 데드 레코닝 파트 이' 오후 두시, 강남 씨 지 브이 예매가 완료되었습니다
    87.06s  ⚡SPAN 주입 [d'=0.96s / d_lead=12.44s]: (tool result) Confirmation ID: A7B9X2
    87.06s  user  발화 끝
    99.50s  agent 발화 시작: 즐거운 영화 관람 되세요!
    99.50s  agent 발화 끝
   101.66s  user  발화 시작: 고마워, 모라라.
   101.66s  agent 발화 끝
   102.75s  agent 발화 시작: 천만에요. 혹시 영화 보러 가기 전에 저녁 식사도 함께 할까요?
   102.75s  user  발화 끝
   108.15s  user  발화 시작: 저녁 식사는… 글쎄…
   108.15s  agent 발화 끝
   109.78s  agent 발화 시작: 근처에 분위기 좋은 레스토랑을 찾아볼까요?
   109.78s  user  발화 끝
   112.48s  user  발화 시작: 응, 좋아. 이탈리안 레스토랑으로 찾아줘.
   112.48s  agent 발화 끝
   114.86s  <ret> 발화 (turn31 첫 프레임)
   115.18s  agent 발화 시작: <ret> 강남에 위치한 '라 피아짜'라는 이탈리안 레스토랑은 평점이 사 점 오점이에요.
   115.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.41s]: (tool result) "La Piazza" - Italian, Gangnam, Rating: 4.5 stars
   115.18s  user  발화 끝
   120.59s  agent 발화 시작: 괜찮으실까요?
   120.59s  agent 발화 끝
   121.13s  user  발화 시작: 좋아 보여!
   121.13s  agent 발화 끝
   122.21s  agent 발화 시작: 그럼, 영화 시작 전에 '라 피아짜'에서 맛있는 저녁 식사를 즐기시는 건 어떠세요?
   122.21s  user  발화 끝
   128.70s  user  발화 시작: 응, 좋아. 그럼 그때까지 뭐 할까?
   128.70s  agent 발화 끝
   131.95s  agent 발화 시작: 영화관 근처에 예쁜 카페들이 많으니, 커피 한 잔 하면서 시간을 보내는 것도 좋을 것 같아요.
   131.95s  user  발화 끝
   140.06s  agent 발화 끝
