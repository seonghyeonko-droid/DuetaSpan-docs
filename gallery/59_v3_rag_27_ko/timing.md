# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 럭스 아우룬케에 대해 읽고 있었는데, 정확히 언제 태어났는지 궁금해요.
     5.06s  <ret> 발화 (turn1 첫 프레임)
     5.21s  agent 발화 시작: <ret> 응, 기록에 따르면 천구백칠십 년에 태어났어.
     5.32s  user  발화 끝
     5.56s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.56s]: Lux Aurunque was born in nineteen seventy.
     8.77s  agent 발화 끝
    10.22s  user  발화 시작: 천구백칠십 년… 와, 생각보다 훨씬 더 일찍 태어났네요. 그리고 혹시 큰 프로젝트에 참여했었나요?
    18.75s  <ret> 발화 (turn3 첫 프레임)
    18.99s  agent 발화 시작: <ret> 아우룬케의 작품은 건축계에서 꽤 유명해. 그는 천구백구십팔 년에 지속 가능한 주택인 헬리오스 하우
    19.12s  user  발화 끝
    20.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.17s]: Lux Aurunque designed the Helios House in nineteen ninety-eight, a lan
    27.92s  user  발화 시작: 헬리오스 하우스… 사진을 본 것 같아요. 그게 그의 첫 번째 주요 의뢰였나요?
    28.03s  agent 발화 끝
    33.95s  agent 발화 시작: 꼭 그렇진 않아— 이미 소규모 프로젝트로 명성을 쌓았거든. 그때부터도 자연을 건축 환경에 통합하는 데 집중했
    34.03s  user  발화 끝
    45.07s  agent 발화 끝
    46.15s  user  발화 시작: 그렇군요. 그럼 그는 상당히 일찍부터 지속 가능성에 대해 생각하고 있었던 건가요?
    52.50s  user  발화 끝
