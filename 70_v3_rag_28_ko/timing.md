# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "보국",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-01",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-11-25",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-07-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-06-10",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-04",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 야, 에너지원으로 기름을 처음 언제 썼대? 궁금하네. | S2 에? 기원전 사세기라고? 그게 말이… | S3 …돼? 좀 더 자세히 말해 봐. | S4 지금 서울 날씨 어때? 갑자기 추워졌던데.

     0.00s  user  발화 시작: 야, 에너지원으로 기름을 처음 언제 썼대? 궁금하네.
     3.45s  <ret> 발화 (turn1 첫 프레임)
     3.77s  agent 발화 시작: <ret> 음, 고대 이집트인들이 기원전 사세기에 처음 에너지원으로 기름을 사용했다고 하네요. 에너지 공부에
     3.77s  ⚡SPAN 주입 [d'=1.44s / d_lead=7.83s]: Oil was first used as an energy source in the fourth century BCE by th
     3.93s  user  발화 끝
     8.51s  user  발화 시작: 응.
     8.95s  user  발화 끝
    11.61s  agent 발화 끝
    11.79s  user  발화 시작: 에? 기원전 사세기라고? 그게 말이…
    14.84s  user  발화 끝
    16.34s  user  발화 시작: …돼? 좀 더 자세히 말해 봐.
    18.16s  <ret> 발화 (turn5 첫 프레임)
    18.47s  agent 발화 시작: <ret> 역사 기록에 따르면 고대 이집트인들은 기름을 조명, 난방, 그리고 미라를 보존하는 데 사용했어요.
    18.48s  ⚡SPAN 주입 [d'=1.92s / d_lead=10.20s]: The ancient Egyptians used oil for lighting, heating, and preserving m
    18.69s  user  발화 끝
    24.21s  user  발화 시작: 응.
    24.65s  user  발화 끝
    28.55s  user  발화 시작: 지금 서울 날씨 어때? 갑자기 추워졌던데.
    28.67s  agent 발화 끝
    31.45s  <ret> 발화 (turn8 첫 프레임)
    31.68s  agent 발화 시작: <ret> 현재 서울은 이십삼도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터로 불고 있어요. 공부하
    31.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.01s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    31.73s  user  발화 끝
    41.69s  agent 발화 끝
