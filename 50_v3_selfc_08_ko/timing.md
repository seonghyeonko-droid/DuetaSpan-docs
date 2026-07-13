# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "수원",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-24",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-22",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-17",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 저녁에 아이들하고 같이 할 만한 거 있을까요? | S2 아, 월드타워… 근데 저는 강남역 근처에 있어요. | S3 와, 감사합니다! | S4 네, 아이들이 한식을 정말 좋아해요.

     0.00s  user  발화 시작: 오늘 저녁에 아이들하고 같이 할 만한 거 있을까요?
     4.00s  agent 발화 시작: 그렇죠.
     4.00s  user  발화 끝
     4.50s  agent 발화 시작: 아이들과 함께하는 저녁 시간을 계획하시는군요. 어떤 걸 좋아하나요?
     4.50s  agent 발화 끝
     8.50s  user  발화 시작: 네.
     8.50s  agent 발화 끝
     9.00s  user  발화 시작: 음… 영화를 볼까 하는데, 아이들이 뭘 좋아할지 잘 모르겠어요.
     9.00s  user  발화 끝
    13.49s  agent 발화 시작: 아이들이 좋아하는 영화를 찾으시는군요. 혹시 좋아하는 장르가 있나요?
    13.49s  user  발화 끝
    17.49s  user  발화 시작: 아니요, 딱히 정해둔 건 없어요. 그냥 재미있는 걸 보고 싶어요.
    17.49s  agent 발화 끝
    21.99s  <ret> 발화 (turn7 첫 프레임)
    22.49s  agent 발화 시작: <ret> 아이들이 좋아할 만한 재미있는 영화를 찾고 있는데, "엘리멘탈"이라는 애니메이션 영화가 이천이십삼
    22.49s  user  발화 끝
    22.78s  ⚡SPAN 주입 [d'=0.79s / d_lead=11.00s]: The animated film "Elemental" was released on June 16, 2023, and has r
    33.49s  user  발화 시작: 음.
    33.49s  agent 발화 끝
    33.99s  agent 발화 시작: 혹시 다른 애니메이션 영화도 괜찮을까요?
    33.99s  user  발화 끝
    36.49s  user  발화 시작: 아니, "엘리멘탈"이 괜찮아 보이네요. 혹시 지금 상영하는 데가 있나요?
    36.49s  agent 발화 끝
    40.77s  <ret> 발화 (turn11 첫 프레임)
    40.98s  agent 발화 시작: <ret> "엘리멘탈"은 오늘 롯데시네마 월드타워에서 오후 여섯시와 여덟시 삼십분에 상영하고 있습니다.
    40.98s  user  발화 끝
    41.66s  ⚡SPAN 주입 [d'=0.89s / d_lead=5.00s]: (tool result) {"movie name": "Elemental", "showtimes": 18:00, 20:30, "
    45.98s  user  발화 시작: 네네.
    45.98s  agent 발화 끝
    46.48s  user  발화 시작: 아, 월드타워… 근데 저는 강남역 근처에 있어요.
    46.48s  user  발화 끝
    49.80s  <ret> 발화 (turn14 첫 프레임)
    49.98s  agent 발화 시작: <ret> 강남역 근처 메가박스 코엑스에서 오후 일곱시 십오분과 아홉시 사십오분에 상영하고 있습니다.
    49.98s  user  발화 끝
    50.81s  ⚡SPAN 주입 [d'=1.01s / d_lead=5.50s]: (tool result) {"movie name": "Elemental", "showtimes": 19:15, 21:45, "
    55.48s  user  발화 시작: 네.
    55.48s  agent 발화 끝
    55.98s  user  발화 시작: 메가박스 코엑스… 아, 제가 코엑스 가는 길인데, 그럼 일곱시 십오분 걸까요?
    55.98s  user  발화 끝
    61.48s  agent 발화 시작: 코엑스로 가시는 길이라면, 일곱시 십오분 영화를 예매해 드릴까요?
    61.48s  user  발화 끝
    65.47s  user  발화 시작: 네, 그렇게 해주세요.
    65.47s  agent 발화 끝
    66.65s  <ret> 발화 (turn19 첫 프레임)
    66.97s  agent 발화 시작: <ret> 예매가 완료되었습니다. 확인 번호는 케이 엘 칠 팔 구 이 삼 사이고, 총 금액은 삼만 육천 원입
    66.97s  user  발화 끝
    67.78s  ⚡SPAN 주입 [d'=1.13s / d_lead=8.50s]: (tool result) {"confirmation id": "KL789234", "movie name": "Elemental
    75.47s  user  발화 시작: 맞아요.
    75.47s  agent 발화 끝
    75.97s  user  발화 시작: 와, 감사합니다!
    75.97s  user  발화 끝
    76.97s  agent 발화 시작: 즐거운 시간 보내세요! 혹시 영화 보러 가기 전에 저녁 식사도 하실 건가요?
    76.97s  user  발화 끝
    82.97s  user  발화 시작: 네.
    82.97s  agent 발화 끝
    83.47s  user  발화 시작: 아, 그러네요. 근처에 맛있는 식당도 알아봐 주시겠어요?
    83.47s  user  발화 끝
    86.54s  <ret> 발화 (turn25 첫 프레임)
    86.97s  agent 발화 시작: <ret> 코엑스몰 비 일층에 있는 "남도한정식"이라는 한식당이 평점이 사 점 오점이고, 가격대는 보통입니다
    86.97s  user  발화 끝
    87.42s  ⚡SPAN 주입 [d'=0.88s / d_lead=6.00s]: (tool result) {"restaurant name": "남도한정식", "cuisine": "한식", "rating": 
    92.96s  user  발화 시작: 그렇죠.
    92.96s  agent 발화 끝
    93.46s  user  발화 시작: 남도한정식… 음, 괜찮네요.
    93.46s  user  발화 끝
    94.96s  agent 발화 시작: 아이들이 한식을 좋아하나요?
    94.96s  user  발화 끝
    96.46s  user  발화 시작: 네, 아이들이 한식을 정말 좋아해요.
    96.46s  agent 발화 끝
    98.96s  agent 발화 시작: 다행이네요. 그럼 식사 후에 영화를 보러 가시는 일정이겠네요.
    98.96s  user  발화 끝
   102.96s  user  발화 시작: 그렇죠.
   102.96s  agent 발화 끝
   103.46s  user  발화 시작: 네, 맞아요.
   103.46s  user  발화 끝
   104.46s  agent 발화 시작: 혹시 영화나 식사 관련해서 더 필요하신 정보가 있을까요?
   104.46s  user  발화 끝
   108.46s  user  발화 시작: 그렇죠.
   108.46s  agent 발화 끝
   108.96s  user  발화 시작: 아니요, 괜찮아요. 정말 감사합니다.
   108.96s  user  발화 끝
   110.96s  agent 발화 시작: 도움이 되어서 기쁩니다. 아이들과 즐거운 시간 보내세요!
   110.96s  user  발화 끝
   114.45s  agent 발화 끝
