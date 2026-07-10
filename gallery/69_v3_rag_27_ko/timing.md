# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "연준",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-05-04",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-10-26",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-16",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 바바라 조던하고 마크 노울즈가 무슨 관계 있어요? | S2 이천십사년이요? 생각보다 빠르네요. | S3 대단하시네요. 혹시 정치 생활하면서 중요한 연설 같은 거 하신 | S4 그럼, 그녀가 정치 생활하면서 가장 중요하게 생각했던 가치는 

     0.00s  user  발화 시작: 바바라 조던하고 마크 노울즈가 무슨 관계 있어요?
     3.08s  <ret> 발화 (turn1 첫 프레임)
     3.15s  agent 발화 시작: <ret> 두 분은 완전히 다른 분야에서 활동하신 분들이시네요. 바바라 조던은 법조계와 정치계에서, 마크 노
     3.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.98s]: Barbara Jordan was an American lawyer, politician, and civil rights le
     3.38s  user  발화 끝
     7.73s  user  발화 시작: 그치.
     8.37s  user  발화 끝
    10.71s  user  발화 시작: 아, 그렇군요. 그럼 마크 노울즈는 언제 은퇴했어요?
    11.12s  agent 발화 끝
    14.78s  <ret> 발화 (turn4 첫 프레임)
    14.82s  user  발화 끝
    14.85s  agent 발화 시작: <ret> 마크 노울즈 선수는 이천십사년 이월 이십팔일에 이십년간의 프로 선수 생활을 마무리하셨답니다.
    14.86s  ⚡SPAN 주입 [d'=0.72s / d_lead=5.51s]: (tool result) Mark Knowles announced his retirement from professional 
    20.35s  user  발화 시작: 이천십사년이요? 생각보다 빠르네요.
    20.36s  agent 발화 끝
    23.04s  agent 발화 시작: 네, 이십년이면 꽤 긴 시간이죠.
    23.25s  user  발화 끝
    24.89s  agent 발화 끝
    27.27s  user  발화 시작: 바바라 조던은 어떤 분야에서 유명해졌어요?
    30.36s  <ret> 발화 (turn8 첫 프레임)
    30.75s  agent 발화 시작: <ret> 바바라 조던은 텍사스 주 상원의회와 미국 하원에 선출된 최초의 흑인 여성 의원이셨어요.
    30.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.64s]: Barbara Jordan was the first African-American woman elected to the Tex
    30.88s  user  발화 끝
    34.57s  user  발화 시작: 응.
    34.93s  user  발화 끝
    36.40s  agent 발화 끝
    36.52s  user  발화 시작: 대단하시네요. 혹시 정치 생활하면서 중요한 연설 같은 거 하신 적 있어요? —
    41.28s  user  발화 시작: … 혹시 그 연설 영상 찾아볼 수 있을까요?
    41.47s  user  발화 끝
    43.56s  <ret> 발화 (turn12 첫 프레임)
    43.71s  agent 발화 시작: <ret> 바바라 조던 의원의 천구백칠십오년 탄핵 관련 하원 법사위원회 발언은 미국 역사상 가장 위대한 연설
    43.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.81s]: (tool result) Barbara Jordan’s 1975 House Judiciary Committee statemen
    43.87s  user  발화 끝
    47.20s  user  발화 시작: 어.
    47.69s  user  발화 끝
    52.36s  agent 발화 시작: 네, 많은 분들이 감명 깊게 보셨다고 해요.
    52.52s  agent 발화 끝
    54.62s  user  발화 시작: 그럼, 그녀가 정치 생활하면서 가장 중요하게 생각했던 가치는 뭐였어요?
    54.76s  agent 발화 끝
    59.19s  <ret> 발화 (turn16 첫 프레임)
    59.49s  agent 발화 시작: <ret> 바바라 조던 의원은 평생 동안 시민권, 사회 정의, 그리고 미국 헌법의 중요성을 옹호하셨어요.
    59.51s  ⚡SPAN 주입 [d'=0.88s / d_lead=6.02s]: Barbara Jordan consistently championed civil rights, social justice, a
    59.72s  user  발화 끝
    65.52s  agent 발화 끝
    65.58s  user  발화 시작: 와, 정말 멋진 분이시네요.
    68.26s  user  발화 끝
    68.56s  agent 발화 시작: 맞아요. 많은 사람들에게 영감을 주신 분이죠.
    71.38s  agent 발화 끝
