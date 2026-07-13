# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Morgan",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-11-14",
#       "category": "home",
#       "text": "User's home address is 184 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-21",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-10-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-06",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 캐나다 총리를 가장 오래 지낸 분이 누구였는지 궁금했어요. | S2 아, 알겠습니다. 좋은 정보네요. | S3 그렇겠죠. 그 기록에 근접한 다른 사람도 있었나요? | S4 거의 삼년이나 되는 꽤 큰 차이네요.

     0.00s  user  발화 시작: 캐나다 총리를 가장 오래 지낸 분이 누구였는지 궁금했어요.
     4.08s  <ret> 발화 (turn1 첫 프레임)
     4.40s  agent 발화 시작: <ret> 좋은 질문이세요. 리더십과 시간에 대해 생각하게 만드는 질문이네요. 윌리엄 라이언 매켄지 킹이 총
     4.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.45s]: William Lyon Mackenzie King served as Canada’s prime minister for a to
     4.40s  user  발화 끝
    14.85s  user  발화 시작: 그분이 제이차 세계 대전 중에도 총리였나요?
    14.85s  agent 발화 끝
    18.15s  agent 발화 시작: 자연스럽게 이어지는 질문이네요. 그 시대의 규모를 생각하면 당연한 질문이죠. 네, 윌리엄 라이언 매켄지 킹은
    18.15s  user  발화 끝
    30.81s  user  발화 시작: 진짜요?
    30.81s  agent 발화 끝
    31.36s  user  발화 시작: 아, 알겠습니다. 좋은 정보네요.
    31.36s  user  발화 끝
    33.56s  agent 발화 시작: 힘든 시기일수록 지도자들이 진정한 유산을 정의하는 경우가 많다고 생각하지 않으세요? 흔들리지 않는 손길이 필
    33.56s  user  발화 끝
    41.81s  user  발화 시작: 그렇겠죠. 그 기록에 근접한 다른 사람도 있었나요?
    41.81s  agent 발화 끝
    45.42s  <ret> 발화 (turn8 첫 프레임)
    45.66s  agent 발화 시작: <ret> 다른 분들도 뚜렷한 족적을 남겼지만, 킹만큼 오래 재임한 사람은 없었습니다. 존 A. 맥도날드 경
    45.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.55s]: Sir John A. Macdonald served as Canada’s first prime minister and held
    45.66s  user  발화 끝
    57.21s  user  발화 시작: 거의 삼년이나 되는 꽤 큰 차이네요.
    57.21s  agent 발화 끝
    60.51s  agent 발화 시작: 꽤 큰 기간이네요, 그렇지 않나요? 때로는 더 긴 임기가 국가의 과정에 더 깊고 지속적인 영향을 미칠 수 있
    60.51s  user  발화 끝
    70.41s  agent 발화 끝
