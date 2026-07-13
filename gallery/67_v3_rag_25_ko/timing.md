# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "세찬",
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
#       "date": "2026-05-27",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-10",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-12-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 이천십년 얼터너티브 프레스 잡지 표지 모델에 더 캡 말고 | S2 요즘 음악은 어떤 걸 듣고 있어요? | S3 오, 앨범 제목이 예쁘네요. 들어봐야겠어요. | S4 다행이다. 혹시 여행 전에 준비해야 할 게 있을까요?

     0.00s  user  발화 시작: 혹시 이천십년 얼터너티브 프레스 잡지 표지 모델에 더 캡 말고 다른 밴드도 있었어요?
     5.80s  <ret> 발화 (turn1 첫 프레임)
     5.93s  agent 발화 시작: <ret> 이천십년 얼터너티브 프레스 잡지 표지에는 더 캡과 함께 헤이 먼데이, 네버 샤우트 네버가 실려 있
     5.93s  user  발화 끝
     6.78s  ⚡SPAN 주입 [d'=0.98s / d_lead=6.84s]: Hey Monday was featured on the cover of Alternative Press magazine alo
    12.77s  user  발화 시작: 예.
    12.77s  agent 발화 끝
    13.23s  user  발화 시작: 아, 헤이 먼데이도 있었군요. 좀 오래된 밴드인 것 같아요.
    13.23s  user  발화 끝
    17.33s  agent 발화 시작: 네, 그렇죠. 시간이 참 빠르네요.
    17.33s  user  발화 끝
    19.61s  user  발화 시작: 요즘 음악은 어떤 걸 듣고 있어요?
    19.61s  agent 발화 끝
    22.35s  agent 발화 시작: 요즘은 주로 잔잔한 인디 음악을 듣는 편이에요. 마음이 편안해지거든요.
    22.35s  user  발화 끝
    26.45s  user  발화 시작: 인디 음악… 저도 가끔 듣는데, 추천해 줄 만한 밴드 있어요?
    26.45s  agent 발화 끝
    30.87s  <ret> 발화 (turn8 첫 프레임)
    31.01s  agent 발화 시작: <ret> 혹시 더 재패니즈 하우스를 아세요? 앰버 베인이 이끄는 영국 인디 팝 밴드인데, 이 피와 앨범을 
    31.01s  user  발화 끝
    31.69s  ⚡SPAN 주입 [d'=0.82s / d_lead=8.21s]: The Japanese House is an English indie pop act headed by Amber Bain, w
    39.22s  user  발화 시작: 네.
    39.22s  agent 발화 끝
    39.68s  agent 발화 시작: 앨범 제목은 '소 유 인 어 드림'이라고 하더라고요.
    39.68s  user  발화 끝
    43.33s  user  발화 시작: 네.
    43.33s  agent 발화 끝
    43.78s  user  발화 시작: 오, 앨범 제목이 예쁘네요. 들어봐야겠어요.
    43.78s  user  발화 끝
    45.69s  <ret> 발화 (turn13 첫 프레임)
    46.06s  agent 발화 시작: <ret> 지금 서울 날씨는 섭씨 이십삼도, 습도는 칠십사퍼센트, 바람은 시속 오 점 오킬로미터 정도예요.
    46.06s  user  발화 끝
    46.92s  ⚡SPAN 주입 [d'=1.23s / d_lead=5.93s]: (tool result) Weather in Seoul: 23.0°C, humidity 74%, wind 5.5 km/h.
    51.99s  user  발화 시작: 서울 날씨 알려줘서 고마워요. 이번 주말에 여행 갈 건데, 날씨가 괜찮을까요?
    51.99s  agent 발화 끝
    57.01s  agent 발화 시작: 네.
    57.01s  user  발화 끝
    57.47s  agent 발화 시작: 이번 주말은 대체로 맑을 것으로 예상돼요. 여행하기 좋겠네요.
    57.47s  agent 발화 끝
    61.12s  user  발화 시작: 그렇죠.
    61.12s  agent 발화 끝
    61.57s  user  발화 시작: 다행이다. 혹시 여행 전에 준비해야 할 게 있을까요?
    61.57s  user  발화 끝
    65.22s  agent 발화 시작: 여행 전에 짐은 다 꾸리셨나요? 그리고 혹시 필요한 약은 챙기셨는지 확인해 보세요.
    65.22s  user  발화 끝
    70.69s  user  발화 시작: 예.
    70.69s  agent 발화 끝
    71.15s  user  발화 시작: 아, 약은 깜빡했네요. 챙겨야겠어요. 감사합니다, 노라 씨.
    71.15s  user  발화 끝
    74.34s  agent 발화 시작: 천만에요. 언제든지 편하게 말씀해 주세요. 여행 잘 다녀오세요.
    74.34s  user  발화 끝
    77.99s  agent 발화 끝
