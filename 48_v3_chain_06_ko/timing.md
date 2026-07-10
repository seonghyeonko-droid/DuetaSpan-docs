# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "하현",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-21",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-11-11",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2025-08-01",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-21",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 내 프로젝트 폴더 안에… | S2 '선셋 비치' 파일 좀 열어 봐. | S3 응, 잘 보여. 이번 주 토요일에 부산 가는 기차표 예매해 줘 | S4 음… 오후 두 시쯤.

     0.00s  user  발화 시작: 내 프로젝트 폴더 안에…
     2.03s  user  발화 끝
     3.10s  user  발화 시작: …있는 이미지 파일을 찾아줘.
     5.15s  <ret> 발화 (turn2 첫 프레임)
     5.36s  user  발화 끝
     5.38s  agent 발화 시작: <ret> 프로젝트 폴더에서 이미지 파일 세 개를 찾았어요. '선셋 비치', '가족 사진', '로고 초안'이
     5.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.42s]: (tool result) Found: 'sunset beach.jpg', 'family portrait.png', 'logo 
     8.08s  user  발화 시작: 어.
     8.58s  user  발화 끝
    12.80s  agent 발화 끝
    14.19s  user  발화 시작: '선셋 비치' 파일 좀 열어 봐.
    15.94s  user  발화 끝
    16.09s  <ret> 발화 (turn5 첫 프레임)
    16.24s  agent 발화 시작: <ret> '선셋 비치' 파일을 열었어요. 잘 보이시나요?
    16.25s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.23s]: (tool result) File opened successfully.
    19.46s  user  발화 시작: 응, 잘 보여. 이번 주 토요일에 부산 가는 기차표 예매해 줘.
    19.47s  agent 발화 끝
    24.18s  user  발화 끝
    24.28s  agent 발화 시작: 이번 주 토요일 부산 가는 기차표 예매를 도와드릴게요. 몇 시쯤 출발하는 걸 원하세요?
    30.39s  agent 발화 끝
    30.44s  user  발화 시작: 음… 오후 두 시쯤.
    33.22s  <ret> 발화 (turn9 첫 프레임)
    33.46s  agent 발화 시작: <ret> 오후 두 시, 서울에서 부산까지 KTX 열차표가 있어요. 두 시간 반 정도 걸리고, 오만 구천 팔
    33.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.55s]: (tool result) 14:00 KTX 102, Seoul to Busan, 2h 30m, ₩59,800.
    33.49s  user  발화 끝
    41.02s  agent 발화 끝
