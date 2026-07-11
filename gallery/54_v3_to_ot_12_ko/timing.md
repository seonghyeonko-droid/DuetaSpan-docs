# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "성진",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-28",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2026-05-24",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-06-29",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 런던 대화재에 대해 일기를 쓴 사람이 누구였지? | S2 음, 그 피피스라는 사람이 뭘 특별히 했길래 유명한 거야? | S3 …그 일기에서 대화재에 대해 얼마나 자세히 썼어? | S4 아, 그렇구나. 그 일기를 지금 읽어볼 수 있는 데가 있을까?

     0.00s  user  발화 시작: 런던 대화재에 대해 일기를 쓴 사람이 누구였지?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.08s  agent 발화 시작: <ret> 런던 대화재 당시 일기를 쓴 사람은 사무엘 피피스였어요. 그 시대의 기록을 남긴 중요한 인물이죠.
     0.08s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.16s]: Samuel Pepys kept a diary during the Great Fire of London in 1666.
     0.08s  user  발화 끝
     0.24s  user  발화 시작: 음.
     0.24s  agent 발화 끝
     0.25s  user  발화 시작: 음, 그 피피스라는 사람이 뭘 특별히 했길래 유명한 거야?
     0.25s  user  발화 끝
     0.25s  <ret> 발화 (turn6 첫 프레임)
     0.28s  <ret> 발화 (turn4 첫 프레임)
     0.36s  agent 발화 시작: <ret> 사무엘 피피스는 해군 행정관이자 국회의원이었는데—
     0.36s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: Samuel Pepys was a naval administrator and Member of Parliament, noted
     0.36s  user  발화 끝
     0.41s  user  발화 시작: …그 일기에서 대화재에 대해 얼마나 자세히 썼어?
     0.41s  agent 발화 끝
     0.49s  agent 발화 시작: <ret> 피피스의 일기는 런던 대화재의 확산과 영향에 대한 자세한 기록을 담고 있어요. 당시 상황을 생생하
     0.49s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.24s]: Pepys' diary provides a detailed account of the Great Fire of London, 
     0.49s  user  발화 끝
     0.54s  <ret> 발화 (turn9 첫 프레임)
     0.74s  user  발화 시작: 그치.
     0.74s  agent 발화 끝
     0.75s  user  발화 시작: 아, 그렇구나. 그 일기를 지금 읽어볼 수 있는 데가 있을까?
     0.75s  user  발화 끝
     0.86s  agent 발화 시작: <ret> 사무엘 피피스의 일기는 구텐베르크 프로젝트에서 무료로 온라인에서 볼 수 있어요. 링크는 이쪽입니다
     0.86s  ⚡SPAN 주입 [d'=0.14s / d_lead=0.14s]: (tool result) Project Gutenberg offers Samuel Pepys' diary online for 
     0.86s  user  발화 끝
     1.00s  agent 발화 끝
