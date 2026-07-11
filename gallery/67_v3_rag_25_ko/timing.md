# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "서희",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-31",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-25",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 프라 씨, 카마시아하고 첼론이라는 꽃이 둘 다 북미 자생종이에 | S2 잠깐만요, 첼론이 플로리다에도 있어요? | S3 …플로리다는 좀 의외인데요. 첼론은 습지에서 자라는 꽃이잖아요 | S4 아, 파란색 꽃이 피는군요. 보기 예쁠 것 같아요.

     0.00s  user  발화 시작: 프라 씨, 카마시아하고 첼론이라는 꽃이 둘 다 북미 자생종이에요?
     0.00s  <ret> 발화 (turn4 첫 프레임)
     0.08s  agent 발화 시작: 북미 자생종인지 궁금하시군요. 두 꽃 모두 북미가 원산지입니다.
     0.08s  user  발화 끝
     0.14s  user  발화 시작: 음.
     0.14s  agent 발화 끝
     0.15s  user  발화 시작: 음, 그렇군요. 근데 카마시아는 좀 더 흔하게 보이던데, 첼론은 잘 안 보이는 것 같아요.
     0.15s  user  발화 끝
     0.27s  agent 발화 시작: <ret> 카마시아는 브리티시컬럼비아부터 캘리포니아, 그리고 로키산맥 동쪽까지 서부 북미에 널리 분포하고, 
     0.27s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.16s]: Camassia quamash is widespread across western North America, from Brit
     0.27s  user  발화 끝
     0.43s  user  발화 시작: 음.
     0.43s  agent 발화 끝
     0.44s  user  발화 시작: 잠깐만요, 첼론이 플로리다에도 있어요?
     0.44s  user  발화 끝
     0.44s  <ret> 발화 (turn13 첫 프레임)
     0.47s  agent 발화 시작: 첼론이 플로리다에도 분포한다고 말씀드렸는데—
     0.47s  user  발화 끝
     0.48s  <ret> 발화 (turn9 첫 프레임)
     0.50s  user  발화 시작: …플로리다는 좀 의외인데요. 첼론은 습지에서 자라는 꽃이잖아요.
     0.50s  agent 발화 끝
     0.56s  agent 발화 시작: <ret> 맞아요, 첼론은 습지에서 자라는 꽃입니다. 플로리다의 습한 지역에서 발견되죠.
     0.56s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: Chelone glabra, commonly known as turtlehead, is a perennial plant tha
     0.56s  user  발화 끝
     0.64s  agent 발화 시작: 첼론, 흔히 거북머리라고도 불리는 이 식물은 습지, 늪, 개울가, 연못과 같은 습한 서식지에서 자라는 다년생
     0.64s  agent 발화 끝
     0.77s  user  발화 시작: 어.
     0.77s  agent 발화 끝
     0.78s  user  발화 시작: 거북머리라니, 재밌는 이름이네요. 카마시아는 어떤 종류의 꽃이에요?
     0.78s  user  발화 끝
     0.84s  agent 발화 시작: <ret> 카마시아는 풀과 같은 잎과 푸른색에서 보라색 꽃이 피는 다년생 구근 식물입니다.
     0.84s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: Camassia quamash is a perennial bulbous herb with grass-like leaves an
     0.84s  user  발화 끝
     0.93s  user  발화 시작: 아, 파란색 꽃이 피는군요. 보기 예쁠 것 같아요.
     0.93s  agent 발화 끝
     1.00s  user  발화 끝
