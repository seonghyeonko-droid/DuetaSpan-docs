# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "세은",
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
#       "date": "2026-05-23",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-17",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-03-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 스타벅스 미국 직원 수가 궁금해요. | S2 아, 그렇군요. 그럼 스타벅스… | S3 일만 육천 개가 넘는다니, 정말 많네요! — | S4 학비 지원까지 해준다니, 좋은 회사네요.

     0.00s  user  발화 시작: 스타벅스 미국 직원 수가 궁금해요.
     2.73s  <ret> 발화 (turn1 첫 프레임)
     2.81s  agent 발화 시작: <ret> 스타벅스는 미국에서 대략 이십삼만 팔천 명의 직원을 고용하고 있어요. 일자리를 찾는 분들께 좋은 
     2.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.86s]: Starbucks employs approximately 238,000 people in the United States as
     2.81s  user  발화 끝
    10.66s  user  발화 시작: 와, 생각보다 많네요. 그 숫자에는 파트타임 직원도 포함인가요?
    10.66s  agent 발화 끝
    14.99s  <ret> 발화 (turn3 첫 프레임)
    15.15s  agent 발화 시작: <ret> 네, 파트타임 직원도 모두 포함된 숫자예요.
    15.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.37s]: The 238,000 figure includes both full-time and part-time employees wor
    15.15s  user  발화 끝
    18.52s  agent 발화 시작: 그 이십삼만 팔천 명에는 회사 운영 매장과 유통 센터에서 일하는 정규직과 파트타임 직원이 모두 포함되어 있어
    18.52s  agent 발화 끝
    27.50s  user  발화 시작: 아, 그렇군요. 그럼 스타벅스…
    27.50s  agent 발화 끝
    29.74s  user  발화 시작: …매장 수는 얼마나 되나요?.
    29.74s  user  발화 끝
    31.82s  <ret> 발화 (turn7 첫 프레임)
    31.98s  agent 발화 시작: <ret> 이천이십사년 칠월 십일 기준으로 스타벅스는 미국 내에 일만 육천 삼백오십사개의 매장을 운영하고 있
    31.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.29s]: (tool result) As of July 10, 2024, Starbucks operates 16,354 stores in
    31.98s  user  발화 끝
    39.28s  user  발화 시작: 일만 육천 개가 넘는다니, 정말 많네요! —
    39.28s  agent 발화 끝
    43.21s  user  발화 시작: 근데 그 직원들 평균 연봉은 얼마나 될까요?
    43.21s  user  발화 끝
    46.89s  <ret> 발화 (turn10 첫 프레임)
    47.13s  agent 발화 시작: <ret> 미국 내 스타벅스 직원의 평균 연봉은 연간 약 삼만 삼천 사백팔십이달러 정도예요.
    47.13s  ⚡SPAN 주입 [d'=0.96s / d_lead=6.73s]: The average Starbucks employee in the United States earns around $33,4
    47.13s  user  발화 끝
    53.87s  user  발화 시작: 네.
    53.87s  agent 발화 끝
    54.35s  <ret> 발화 (turn12 첫 프레임)
    54.43s  agent 발화 시작: <ret> 맞아요. 안정적인 수입을 얻을 수 있는 기회인 것 같아요.
    54.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.05s]: Starbucks offers competitive benefits, including health insurance, ret
    54.43s  user  발화 끝
    59.48s  agent 발화 시작: 스타벅스는 건강 보험, 연금 계획, 학비 지원을 포함한 경쟁력 있는 복리후생도 제공하고 있어요.
    59.48s  agent 발화 끝
    66.77s  user  발화 시작: 학비 지원까지 해준다니, 좋은 회사네요.
    66.77s  agent 발화 끝
    69.58s  agent 발화 시작: 그렇죠? 직원들의 성장을 돕는 회사인 것 같아요.
    69.58s  user  발화 끝
    73.51s  agent 발화 끝
