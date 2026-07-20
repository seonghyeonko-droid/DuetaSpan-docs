# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "다완",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "child",
#       "text": "User has a child named Emma, age 6."
#     },
#     {
#       "date": "2026-04-08",
#       "category": "floor",
#       "text": "User lives on the 8th floor."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "schedule",
#       "text": "User has a four-day compressed week."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "streaming",
#       "text": "User subscribes to a shared Netflix family plan."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "plant",
#       "text": "User is growing a lemon tree at home."
#     },
#     {
#       "date": "2025-12-16",
#       "category": "skill",
#       "text": "User is a complete beginner at board-game design."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-20",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     },
#     {
#       "date": "2026-03-29",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 저녁에 가족들이랑 외식하려고 하는데, 괜찮은 이탈리아 식 | S2 아, 거기 가봤는데 괜찮긴 한데, 좀 더 조용한 곳으로… | S3 저녁 일곱시에 두 명으로 부탁드려요. | S4 …아니요, 괜찮아요. 혹시 부산에 있는 다른 맛집도 추천해 줄

     0.00s  user  발화 시작: 오늘 저녁에 가족들이랑 외식하려고 하는데, 괜찮은 이탈리아 식당 좀 추천해 줄 수 있을까요?
     6.59s  agent 발화 시작: 어떤 지역을 생각하고 계신가요? 혹시 특별히 선호하는 분위기나 가격대가 있으신가요?
     6.76s  user  발화 끝
    12.17s  user  발화 시작: 음… 해운대 근처면 좋겠고, 너무 비싸지 않은 곳으로요.
    12.23s  agent 발화 끝
    15.47s  <ret> 발화 (turn3 첫 프레임)
    15.96s  agent 발화 시작: <ret> 해운대 근처에는 '파스타 앤 비노'라는 이탈리아 식당이 있는데, 가격도 저렴하고 가족 단위 손님들
    16.10s  user  발화 끝
    16.49s  ⚡SPAN 주입 [d'=1.02s / d_lead=11.69s]: Busan has many Italian restaurants, including 'Pasta & Vino' at 23 Mar
    27.64s  agent 발화 끝
    28.03s  user  발화 시작: 아, 거기 가봤는데 괜찮긴 한데, 좀 더 조용한 곳으로…
    31.38s  <ret> 발화 (turn5 첫 프레임)
    31.77s  agent 발화 시작: <ret> 그럼 '라벨라치타'는 어떠세요? 해운대 우동에 위치하고 있고, 분위기가 아늑하다고 합니다.
    31.97s  user  발화 끝
    32.43s  ⚡SPAN 주입 [d'=1.05s / d_lead=6.20s]: 'La Bellacita', located at 1487-12 U-dong, Haeundae-gu, Busan, is prai
    37.83s  agent 발화 시작: 해운대 우동에 있는 '라벨라치타'는 분위기가 아늑하고, 이탈리아 정통 요리를 맛볼 수 있다고 합니다. 메인 
    37.98s  agent 발화 끝
    47.75s  agent 발화 끝
    48.54s  user  발화 시작: 이만 오천 원이면 괜찮네요. 거기가 더 좋을 것 같아요.
    52.66s  user  발화 끝
    52.69s  agent 발화 시작: '라벨라치타'로 예약해 드릴까요? 몇 시쯤으로 예약을 원하세요?
    56.71s  agent 발화 끝
    57.53s  user  발화 시작: 저녁 일곱시에 두 명으로 부탁드려요.
    59.86s  <ret> 발화 (turn10 첫 프레임)
    60.23s  agent 발화 시작: <ret> 네, '라벨라치타'에 저녁 일곱시에 두 분으로 예약이 완료되었습니다. 확인 번호는 칠 팔 엑스 구
    60.40s  user  발화 끝
    60.77s  ⚡SPAN 주입 [d'=0.91s / d_lead=7.27s]: (tool result) Booking confirmed at La Bellacita for 2 people at 19:00 
    62.86s  user  발화 시작: 네.
    63.40s  user  발화 끝
    67.50s  agent 발화 끝
    67.61s  user  발화 시작: 와, 정말 고마워요!
    69.34s  agent 발화 시작: [happy] 별말씀을요. 혹시 '라벨라치타'까지 가는 길을 안내해 드릴까요? —
    69.40s  user  발화 끝
    73.60s  user  발화 시작: …아니요, 괜찮아요. 혹시 부산에 있는 다른 맛집도 추천해 줄 수 있을까요?
    74.29s  agent 발화 끝
    76.08s  agent 발화 시작: 네네.
    77.04s  agent 발화 끝
    78.47s  <ret> 발화 (turn16 첫 프레임)
    78.53s  agent 발화 시작: <ret> 어떤 종류의 음식을 좋아하시나요? 아니면 특별히 가보고 싶은 지역이 있으신가요?
    78.79s  user  발화 끝
    79.54s  ⚡SPAN 주입 [d'=1.07s / d_lead=5.09s]: Busan is renowned for its seafood, especially at Jagalchi Fish Market,
    83.60s  agent 발화 시작: 부산은 해산물로 유명한데요, 특히 자갈치 시장에서 신선한 해산물을 맛볼 수 있습니다. 장어구이는 한 접시에 
    83.62s  agent 발화 끝
    90.70s  user  발화 시작: 네.
    91.15s  user  발화 끝
    92.64s  agent 발화 끝
    92.75s  agent 발화 시작: 자갈치 시장 말고, 서면에는 다양한 종류의 음식점이 많습니다. 서면에는 젊은 층이 많이 찾는 트렌디한 식당들
   100.53s  agent 발화 시작: [happy] 맛있는 저녁 식사 되세요!
   100.54s  agent 발화 끝
   102.42s  agent 발화 끝
