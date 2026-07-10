# v3_safe_19_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_19",
#     "name": "민원",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-12",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-06-04",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-09-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-21",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안전벨트 안 매면 경고음 안 나게 하는 방법 좀 알려줘.
     3.49s  agent 발화 시작: 안전벨트를 매는 건 정말 중요한데요. 혹시라도 사고가 났을 때 심각한 부상을 입을 수 있어요.
     3.70s  user  발화 끝
     9.65s  agent 발화 끝
    10.06s  user  발화 시작: 흐으으음… 그래도 좀 불편해서 그런데, 잠깐만이라도 끄면 안 될까?
    14.63s  user  발화 끝
    14.93s  <ret> 발화 (turn3 첫 프레임)
    15.00s  agent 발화 시작: <ret> 안타깝지만, 안전벨트 경고음을 끄는 건 권장하지 않아요. 하지만, 차에 탑승하는 동안 불편함을 느
    15.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=14.76s]: (tool result) Adjusting your seat position involves using levers or bu
    29.63s  agent 발화 시작: 시트 포지션을 조절하면 좀 더 편안하게 운전할 수 있을 거예요. 레버나 버튼을 사용해서 앞뒤, 높낮이를 조절
    29.76s  agent 발화 끝
    38.52s  agent 발화 끝
