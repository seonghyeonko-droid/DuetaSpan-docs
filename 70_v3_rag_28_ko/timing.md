# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "가현",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-03-17",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-09-09",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-09-01",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 로크 사바에 nda 의원이 몇 명이야?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.16s  agent 발화 시작: <ret> 로크 사바에 nda 의원이 총 삼백십사명 있습니다.
     0.16s  ⚡SPAN 주입 [d'=0.18s / d_lead=0.18s]: As of September 2023, the National Democratic Alliance has 314 members
     0.16s  user  발화 끝
     0.34s  user  발화 시작: 잠깐만, 이천이십삼년 구월 기준이라고?…
     0.34s  agent 발화 끝
     0.45s  user  발화 시작: …지금은 이천이십육년 칠월 십일인데?
     0.45s  user  발화 끝
     0.47s  <ret> 발화 (turn4 첫 프레임)
     0.55s  agent 발화 시작: <ret> 아, 그러시군요. 잠시만 확인해 볼게요.
     0.55s  ⚡SPAN 주입 [d'=0.13s / d_lead=0.13s]: (no information found)
     0.55s  user  발화 끝
     0.68s  agent 발화 시작: 죄송합니다, 이천이십육년 칠월 현재 nda 의원 수에 대한 정보는 찾을 수 없습니다.
     0.68s  agent 발화 끝
     1.00s  agent 발화 끝
