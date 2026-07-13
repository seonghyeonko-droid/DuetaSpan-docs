# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "민준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-26",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-04-04",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-03-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 선전 난산구 하이테크 파크 위치가 어디예요? | S2 고마워. | S3 …갈 만한 곳 추천해 줘. | S4 삼십분이면 괜찮네.

     0.00s  user  발화 시작: 선전 난산구 하이테크 파크 위치가 어디예요?
     2.99s  <ret> 발화 (turn1 첫 프레임)
     3.00s  agent 발화 시작: <ret> 선전시 난산구 류시안로 이십이번지에 위치하고 있습니다. 중국 광둥성 선전시 난산구에 있어요.
     3.00s  user  발화 끝
     4.49s  ⚡SPAN 주입 [d'=1.50s / d_lead=5.50s]: (tool result) Hi-Tech Park is located at 22 Liuxian Rd, Nanshan Distri
     8.50s  user  발화 시작: 음… 그 근처에 맛집 좀 알려줘 봐.
     8.50s  agent 발화 끝
    12.00s  agent 발화 시작: 주변에 괜찮은 식당들이 꽤 있습니다. 어떤 종류의 음식을 좋아하세요?
    12.00s  user  발화 끝
    16.50s  user  발화 시작: 맞아.
    16.50s  agent 발화 끝
    17.00s  user  발화 시작: 한식.
    17.00s  user  발화 끝
    17.48s  <ret> 발화 (turn6 첫 프레임)
    17.50s  agent 발화 시작: <ret> 하이테크 파크 근처에는 서울 레스토랑과 부산 레스토랑이 있습니다. 서울 레스토랑은 별점 사 점 오
    17.50s  user  발화 끝
    18.43s  ⚡SPAN 주입 [d'=0.95s / d_lead=12.00s]: There are several Korean restaurants near Hi-Tech Park, including Seou
    29.50s  user  발화 시작: 서울 레스토랑 예약 좀 해줘.
    29.50s  agent 발화 끝
    32.00s  agent 발화 시작: 서울 레스토랑 예약 도와드릴게요. 몇 시에 몇 명으로 예약하시겠어요?
    32.00s  user  발화 끝
    36.50s  user  발화 시작: 오늘 저녁 일곱시에 두명.
    36.50s  agent 발화 끝
    38.21s  <ret> 발화 (turn10 첫 프레임)
    38.50s  agent 발화 시작: <ret> 서울 레스토랑에 오늘 저녁 일곱시에 두명으로 예약이 완료되었습니다. 확인 번호는 팔 칠 육 오 사
    38.50s  user  발화 끝
    39.01s  ⚡SPAN 주입 [d'=0.80s / d_lead=9.00s]: (tool result) Reservation confirmed at Seoul Restaurant for 2 people a
    47.50s  user  발화 시작: 그래.
    47.50s  agent 발화 끝
    48.00s  user  발화 시작: 고마워.
    48.00s  user  발화 끝
    48.50s  agent 발화 시작: 천만에요.
    48.50s  user  발화 끝
    49.00s  user  발화 시작: 내일 날씨는 어때?
    49.00s  agent 발화 끝
    50.15s  <ret> 발화 (turn15 첫 프레임)
    50.45s  ⚡SPAN 주입 [d'=0.30s / d_lead=7.00s]: (tool result) The weather in Shenzhen tomorrow will be 28.0°C, humidit
    50.50s  agent 발화 시작: <ret> 내일 선전 날씨는 이십팔도, 습도 칠십오퍼센트, 풍속 팔 점 이킬로미터이고, 비가 올 가능성이 있
    50.50s  user  발화 끝
    57.50s  user  발화 시작: 아, 그래?
    57.50s  agent 발화 끝
    58.50s  agent 발화 시작: 네, 우산을 챙기시는 게 좋겠어요. 혹시 다른 도시의 날씨도 확인해 드릴까요?
    58.50s  user  발화 끝
    64.00s  user  발화 시작: 아니, 됐어. 이번 주말에…
    64.00s  agent 발화 끝
    66.00s  user  발화 시작: …갈 만한 곳 추천해 줘.
    66.00s  user  발화 끝
    68.50s  agent 발화 시작: 네.
    68.50s  user  발화 끝
    68.55s  <ret> 발화 (turn21 첫 프레임)
    69.00s  agent 발화 시작: <ret> 선전에서 이번 주말에 가볼 만한 곳으로는 세계지창, 민속촌, 따메이샤 해변이 있습니다.
    69.00s  agent 발화 끝
    69.02s  ⚡SPAN 주입 [d'=0.46s / d_lead=5.50s]: Popular weekend attractions in Shenzhen include Window of the World, S
    74.50s  user  발화 시작: 응.
    74.50s  agent 발화 끝
    75.00s  user  발화 시작: 세계지창이 제일 인기 있는 곳이야?
    75.00s  user  발화 끝
    77.50s  agent 발화 시작: 네, 세계지창은 선전에서 가장 인기 있는 관광지 중 하나입니다. 다양한 미니어처 건축물을 볼 수 있습니다.
    77.50s  user  발화 끝
    85.00s  user  발화 시작: 진짜?
    85.00s  agent 발화 끝
    85.50s  user  발화 시작: [laugh] 좋겠다.
    85.50s  user  발화 끝
    86.50s  agent 발화 시작: [happy] 네, 아주 멋진 곳입니다. 사진 찍기에도 좋아요.
    86.50s  user  발화 끝
    90.50s  user  발화 시작: 혹시, 거기 가는 데 지하철을 타면 돼?
    90.50s  agent 발화 끝
    93.55s  <ret> 발화 (turn29 첫 프레임)
    94.00s  agent 발화 시작: <ret> 하이테크 파크에서 세계지창까지는 지하철 구호선을 타면 됩니다. 하이테크 파크역에서 세계지창역까지 
    94.00s  user  발화 끝
    94.16s  ⚡SPAN 주입 [d'=0.61s / d_lead=7.00s]: (tool result) Directions from Hi-Tech Park to Window of the World: Tak
   101.00s  user  발화 시작: 응.
   101.00s  agent 발화 끝
   101.50s  user  발화 시작: 삼십분이면 괜찮네.
   101.50s  user  발화 끝
   102.50s  agent 발화 시작: 네, 그렇게 오래 걸리지 않아요. 지하철이 편리합니다.
   102.50s  user  발화 끝
   106.00s  user  발화 시작: 혹시… 지금 서울에 있는 가족에게 연락해야 하는데, 시간이 몇 시야?
   106.00s  agent 발화 끝
   110.60s  <ret> 발화 (turn34 첫 프레임)
   111.00s  agent 발화 시작: <ret> 지금 서울은 이천이십육년 칠월 십일 금요일 오후 두시 삼십삼분입니다.
   111.00s  user  발화 끝
   111.46s  ⚡SPAN 주입 [d'=0.85s / d_lead=4.50s]: (tool result) It is Friday, July 10, 2026 at 2:33 PM in Asia/Seoul rig
   115.50s  user  발화 시작: 고마워. 덕분에 잘 알게 됐어.
   115.50s  agent 발화 끝
   118.00s  agent 발화 시작: [sigh] 천만에요. 언제든지 편하게 말씀해주세요. 가족분들께 안부 전하세요.
   118.00s  user  발화 끝
   121.99s  user  발화 시작: 응.
   121.99s  agent 발화 끝
   122.49s  user  발화 시작: 알았어. 그럼 이만.
   122.49s  user  발화 끝
   123.99s  agent 발화 시작: 네, 좋은 하루 보내세요. 또 필요하시면 연락 주세요.
   123.99s  user  발화 끝
   127.99s  agent 발화 끝
