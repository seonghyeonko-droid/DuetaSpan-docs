# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Rowan",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-01",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     },
#     {
#       "date": "2025-06-10",
#       "category": "work",
#       "text": "User works as a nurse."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-02",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕, 시험 공부 때문에 좀 힘들어. | S2 기원전 4세기? 와, 진짜 오래됐네. 그때 뭘 하려고 썼는데? | S3 하하, 전쟁… | S4 …어? 엄청나네. 공부 좀 쉬어야겠다. 오늘 날씨 어때?

     0.00s  user  발화 시작: 안녕, 시험 공부 때문에 좀 힘들어.
     2.70s  agent 발화 시작: 안녕하세요! 시험이 다가오면 그렇게 느끼는 건 당연해요. 작은 걸음부터 시작하면 큰 도움이 될 거예요.
     2.72s  user  발화 끝
     6.47s  user  발화 시작: 어어.
     7.15s  user  발화 끝
    11.41s  user  발화 시작: 말은 쉽지… 근데 도저히 집중이 안 돼. 사람들이 기름에서 에너지를 얻기 시작한 가장 오래된 때는 언제야?
    11.42s  agent 발화 끝
    18.36s  <ret> 발화 (turn4 첫 프레임)
    18.50s  user  발화 끝
    18.60s  agent 발화 시작: <ret> 사람들은 기원전 4세기에 처음 기름을 에너지원으로 사용하기 시작했어요. 꽤 오래됐죠, 안 그래요?
    18.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.02s]: Oil was first used as an energy source in the fourth century BCE.
    26.62s  agent 발화 끝
    27.45s  user  발화 시작: 기원전 4세기? 와, 진짜 오래됐네. 그때 뭘 하려고 썼는데?
    31.98s  user  발화 끝
    32.02s  agent 발화 시작: 음, 물론 지금처럼 차를 움직이는 데 쓴 건 아니고요! 주로 조명이나 난방, 심지어 전쟁에도 사용했어요.
    35.59s  user  발화 시작: 그래.
    36.05s  user  발화 끝
    41.15s  agent 발화 끝
    41.46s  user  발화 시작: 하하, 전쟁…
    43.07s  user  발화 끝
    44.92s  user  발화 시작: …어? 엄청나네. 공부 좀 쉬어야겠다. 오늘 날씨 어때?
    48.48s  <ret> 발화 (turn10 첫 프레임)
    48.56s  agent 발화 시작: <ret> 현재 기온은 섭씨 26.0도이고 습도는 65%, 풍속은 시속 7.2킬로미터예요. 신선한 공기를 쐐
    48.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.84s]: (tool result) Current conditions: 26.0°C, humidity 65%, wind 7.2 km/h.
    48.81s  user  발화 끝
    54.40s  agent 발화 끝
