# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "예온",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-13",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 22°C."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "coffee",
#       "text": "User's usual coffee order is a flat white."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "gym",
#       "text": "User has a gym membership near the station."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "medication",
#       "text": "User takes an inhaler for asthma."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "phone",
#       "text": "User uses an iPhone SE."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "emergency",
#       "text": "User's emergency contact is Sofia."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "commute",
#       "text": "User works from home."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-02",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2026-01-06",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 조지아 주지사 선거에 공화당 후보가 누구인지 궁금해요… | S2 아, 켐프 주무장관도요? | S3 그… 마이클 윌리엄스 상원의원에 대해… | S4 …좀 더 자세히 알려주실 수 있을까요?

     0.00s  user  발화 시작: 조지아 주지사 선거에 공화당 후보가 누구인지 궁금해요…
     3.77s  <ret> 발화 (turn1 첫 프레임)
     4.02s  agent 발화 시작: <ret> 조지아 주지사 선거에 출마한 공화당 후보는 마이클 윌리엄스 상원의원입니다.
     4.15s  user  발화 끝
     4.37s  ⚡SPAN 주입 [d'=0.60s / d_lead=5.41s]: Michael Williams, State Senator.
     5.71s  user  발화 시작: 네네.
     6.47s  user  발화 끝
     9.43s  agent 발화 끝
     9.48s  user  발화 시작: 그분 말고 다른 후보도 있나요?
    11.13s  <ret> 발화 (turn4 첫 프레임)
    11.35s  user  발화 끝
    11.61s  agent 발화 시작: <ret> 네, 브라이언 켐프 주무장관도 후보로 출마하셨습니다.
    11.73s  ⚡SPAN 주입 [d'=0.60s / d_lead=4.11s]: Brian Kemp, Secretary of State.
    15.72s  agent 발화 끝
    15.74s  user  발화 시작: 아, 켐프 주무장관도요?
    17.59s  agent 발화 시작: 네, 두 분이 현재까지 주요 공화당 후보입니다.
    17.61s  user  발화 끝
    19.00s  user  발화 시작: 네네.
    19.69s  user  발화 끝
    20.26s  agent 발화 끝
    20.84s  user  발화 시작: 그… 마이클 윌리엄스 상원의원에 대해…
    24.19s  user  발화 끝
    26.30s  user  발화 시작: …좀 더 자세히 알려주실 수 있을까요?
    28.45s  <ret> 발화 (turn10 첫 프레임)
    28.52s  agent 발화 시작: <ret> 마이클 윌리엄스 의원은 조지아주 이십칠선거구를 대표하는 공화당 상원의원입니다. 이천십년에 처음 당
    28.55s  user  발화 끝
    29.08s  ⚡SPAN 주입 [d'=0.63s / d_lead=5.96s]: Michael Williams is a Republican state senator representing Georgia’s 
    39.78s  agent 발화 끝
