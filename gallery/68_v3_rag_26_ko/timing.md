# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "수우",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-03-27",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-09-14",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2025-07-19",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-31",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 요즘 취업 준비가 너무 힘들어요. 뭘 해야 할지 감이 안 잡히 | S2 …의회 첫 회의가 언제 열렸는지 아세요? | S3 음… 그러게요. 근데 저는 지금 당장 뭘 해야 할지… | S4 아, 더운 날씨네요. 그럼 저는 이제 다시 제 목표를 생각해 

     0.00s  user  발화 시작: 요즘 취업 준비가 너무 힘들어요. 뭘 해야 할지 감이 안 잡히네요.
     5.33s  user  발화 끝
     5.38s  agent 발화 시작: 취업 준비가 막막하게 느껴질 때가 있죠. 무엇부터 시작해야 할지 혼란스러울 수 있어요.
     7.16s  user  발화 시작: 응응.
     7.98s  user  발화 끝
    11.11s  user  발화 시작: 네, 그렇죠. 혹시… 헌법 제정…
    11.17s  agent 발화 끝
    14.49s  user  발화 끝
    16.16s  user  발화 시작: …의회 첫 회의가 언제 열렸는지 아세요?
    18.38s  <ret> 발화 (turn5 첫 프레임)
    18.69s  agent 발화 시작: <ret> 헌법 제정 의회 첫 회의는 천구백사십육년 십이월 육일, 뉴델리의 왕족 회의장에서 열렸습니다.
    18.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.90s]: The first meeting of the Indian Constituent Assembly was held on Decem
    18.75s  user  발화 끝
    23.18s  user  발화 시작: 응.
    23.91s  user  발화 끝
    25.59s  agent 발화 끝
    25.61s  user  발화 시작: 아, 그렇군요. 천구백사십육년이네요.
    29.93s  agent 발화 시작: 네, 맞아요. 중요한 역사적인 순간이었죠.
    30.09s  user  발화 끝
    31.06s  user  발화 시작: 그치.
    31.89s  user  발화 끝
    32.70s  agent 발화 시작: 요즘 힘든 시기이지만, 과거를 돌아보면서 용기를 얻는 것도 좋은 방법이라고 생각해요.
    32.84s  agent 발화 끝
    34.96s  user  발화 시작: 어.
    35.64s  user  발화 끝
    38.05s  user  발화 시작: 음… 그러게요. 근데 저는 지금 당장 뭘 해야 할지…
    38.17s  agent 발화 끝
    42.67s  agent 발화 시작: 지금은 목표를 세우고, 작은 단계부터 시작하는 게 중요해요. 너무 조급해하지 마세요.
    42.81s  user  발화 끝
    45.31s  user  발화 시작: 응.
    45.98s  user  발화 끝
    48.27s  agent 발화 끝
    49.14s  user  발화 시작: 작은 단계부터… 알겠습니다. 혹시 지금 서울 날씨는 어때요?
    54.69s  <ret> 발화 (turn16 첫 프레임)
    54.76s  agent 발화 시작: <ret> 지금 서울 날씨는 이십팔 점 영도이고, 습도는 칠십%, 바람은 시속 삼 점 영킬로미터입니다. 날씨
    54.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.43s]: (tool result) The weather in Seoul is 28.0°C, humidity 70%, wind 3.0 k
    54.94s  user  발화 끝
    63.19s  agent 발화 끝
    65.20s  user  발화 시작: 아, 더운 날씨네요. 그럼 저는 이제 다시 제 목표를 생각해 봐야겠어요.
    70.82s  agent 발화 시작: 네, 좋은 생각이에요. 스스로에게 집중하고, 차근차근 단계를 밟아나가면 분명 좋은 결과가 있을 거예요.
    70.95s  user  발화 끝
    76.84s  agent 발화 끝
